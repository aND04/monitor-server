"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeHtmlEvaluation = exports.executeUrlEvaluation = exports.initEvaluator = void 0;
const htmlparser = __importStar(require("htmlparser2"));
const css_select_1 = __importDefault(require("css-select"));
const lodash_clone_1 = __importDefault(require("lodash.clone"));
const qualweb = __importStar(require("./qualweb"));
const tests_1 = __importDefault(require("./tests"));
const testsColors_1 = __importDefault(require("./testsColors"));
const security_1 = require("../lib/security");
const mapping_1 = require("./mapping");
function completeMissingReportElements(report) {
    let _dom = {};
    const handler = new htmlparser.DomHandler((error, dom) => {
        if (error) {
            throw new Error();
        }
        else {
            _dom = lodash_clone_1.default(dom);
        }
    });
    const parser = new htmlparser.Parser(handler);
    parser.write(report.pagecode.replace(/(\r\n|\n|\r|\t)/gm, ''));
    parser.end();
    if (report.data.elems['img'] === undefined) {
        const img = css_select_1.default('img', _dom);
        report.data.elems['img'] = img.length;
    }
    const area = css_select_1.default('area', _dom);
    report.data.elems['area'] = area.length;
    const inpImg = css_select_1.default('a', _dom);
    report.data.elems['inpImg'] = inpImg.length;
    if (report.data.elems['hx'] === undefined) {
        const hx = css_select_1.default('h1, h2, h3, h4, h5, h6, [role="heading"]', _dom);
        report.data.elems['hx'] = hx.length;
    }
    const roles = ['checkbox', 'combobox', 'listbox', 'menuitemcheckbox', 'menuitemradio', 'radio', 'searchbox', 'slider', 'spinbutton', 'switch', 'textbox'];
    const label = css_select_1.default('input, select, textarea, ' + roles.map(r => `[role="${r}"]`).join(', '), _dom);
    report.data.elems['label'] = label.length;
    const form = css_select_1.default('form', _dom);
    report.data.elems['form'] = form.length;
    const table = css_select_1.default('table', _dom);
    report.data.elems['tableData'] = table.length;
    report.data.elems['tableLayout'] = table.length;
    report.data.elems['tableComplex'] = table.length;
    const tabletable = css_select_1.default('table table', _dom);
    report.data.elems['tableNested'] = tabletable.length;
    const iframe = css_select_1.default('iframe', _dom);
    report.data.elems['iframe'] = iframe.length;
    const ehandler = css_select_1.default('*[onmousedown], *[onmouseup], *[onclick], *[onmouseover], *[onmouseout]', _dom);
    report.data.elems['ehandler'] = ehandler.length;
}
function generateScore(report) {
    let rel = 0;
    let pon = 0;
    for (const test in report.data.tot.results) {
        const value = tests_1.default[test];
        if (report.data.elems.frame) {
            if (test in ['a_01b', 'a_02a', 'hx_01a', 'layout_01a', 'layout_02a']) {
                continue;
            }
        }
        let calc = false;
        switch (value['type']) {
            case 'true':
            case 'decr':
                if ((value['elem'] === 'all') || report.data['elems'][value['elem']] !== undefined) {
                    if (report.data['elems'][value['test']] !== undefined) {
                        calc = true;
                    }
                }
                break;
            case 'fals':
                if ((value['elem'] === 'all') || report.data['elems'][value['elem']] !== undefined) {
                    if (report.data['elems'][value['test']] === undefined) {
                        calc = true;
                    }
                }
                break;
            case 'prop':
                if (report.data['elems'][value['elem']] !== undefined && report.data['elems'][value['test']] !== undefined) {
                    calc = true;
                }
                break;
        }
        if (calc) {
            let temp = null;
            if (tests_1.default[test]['type'] === 'prop') {
                temp = calculateProp(value, report);
            }
            else if (tests_1.default[test]['type'] === 'decr') {
                temp = calculateDecr(value, report);
            }
            else {
                temp = calculateTrueFalse(value);
            }
            const pp = temp['p'] / 5;
            const ss = temp['s'] * pp;
            rel += ss;
            pon += pp;
            report.data.tot.results[test] = value['score'] + '@' + ss;
        }
    }
    return (rel / pon).toFixed(1);
}
function calculateTrueFalse(v) {
    const score = v['score'];
    const ret = { s: score, p: 0 };
    for (const w in v['dis']) {
        if (parseInt(v.dis[w]) > 1) {
            const p = +v['trust'] * parseInt(v.dis[w]);
            ret['p'] += p;
        }
    }
    return ret;
}
function calculateDecr(v, report) {
    const test = report.data.elems[v['test']];
    const limit = v['top'];
    const steps = v['steps'];
    const score = v['score'];
    const errors = test - limit;
    const minus = errors > 0 ? Math.round(errors / steps) : 0;
    const op = score - minus;
    const rr = op < 1 ? 1 : op;
    const ret = { s: rr, p: 0 };
    for (const w in v['dis']) {
        if (parseInt(v.dis[w]) > 1) {
            const p = +v['trust'] * parseInt(v.dis[w]);
            ret['p'] += p;
        }
    }
    return ret;
}
function calculateProp(v, report) {
    const elem = report.data.elems[v['elem']];
    const test = report.data.elems[v['test']];
    const score = v['score'];
    const op = score - ((score / elem) * test);
    const rr = op < 1 ? 1 : op;
    const ret = { s: rr, p: 0 };
    for (const w in v['dis']) {
        if (parseInt(v.dis[w]) > 1) {
            const p = +v['trust'] * parseInt(v.dis[w]);
            ret['p'] += p;
        }
    }
    return lodash_clone_1.default(ret);
}
function calculateCssRules(evaluation) {
    const cssReport = evaluation.modules['css-techniques'];
    return Object.keys(cssReport.assertions).length;
}
function getHtmlLang(html) {
    let lang = '';
    let _dom = {};
    const handler = new htmlparser.DomHandler((error, dom) => {
        if (error) {
            throw new Error();
        }
        else {
            _dom = lodash_clone_1.default(dom);
        }
    });
    const parser = new htmlparser.Parser(handler);
    parser.write(html.replace(/(\r\n|\n|\r|\t)/gm, ''));
    parser.end();
    const htmlElement = css_select_1.default.selectOne('html', _dom);
    if (htmlElement && htmlElement.attribs && htmlElement.attribs.lang) {
        lang = htmlElement.attribs.lang;
    }
    return lang;
}
function calculateConform(results) {
    const errors = {
        A: 0,
        AA: 0,
        AAA: 0
    };
    for (const ee in results || {}) {
        if (ee) {
            let level = tests_1.default[ee]['level'].toUpperCase();
            if (testsColors_1.default[ee] === 'R') {
                errors[level]++;
            }
        }
    }
    return `${errors.A}@${errors.AA}@${errors.AAA}`;
}
function parseEvaluation(evaluation) {
    const { elements, results, nodes } = mapping_1.getElementsMapping(evaluation);
    const report = {};
    report.pagecode = evaluation.system.page.dom.processed.html.plain;
    report['data'] = {};
    report['data'].title = evaluation.system.page.dom.processed.title;
    report['data'].rawUrl = evaluation.system.url.completeUrl;
    report['data'].elems = lodash_clone_1.default(elements);
    report['data'].nodes = lodash_clone_1.default(nodes);
    report['data'].date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    report['data'].tot = {};
    report['data'].tot.info = {};
    report['data'].tot.info.url = lodash_clone_1.default(report['data'].rawUrl);
    report['data'].tot.info.title = lodash_clone_1.default(report['data'].title);
    report['data'].tot.info.date = lodash_clone_1.default(report['data'].date);
    report['data'].tot.info.htmlTags = evaluation.system.page.dom.processed.elementCount;
    report['data'].tot.info.size = encodeURI(report.pagecode).split(/%..|./).length - 1;
    report['data'].tot.info.cssRules = calculateCssRules(evaluation);
    report['data'].tot.info.encoding = 'utf-8';
    report['data'].tot.info.lang = getHtmlLang(evaluation.system.page.dom.processed.html.plain);
    report['data'].tot.info.content = 'text/html';
    report['data'].tot.info.hash = security_1.generateMd5Hash(report['data'].date);
    report['data'].tot.info.tests = Object.keys(results).length;
    report['data'].tot.elems = lodash_clone_1.default(report['data'].elems);
    report['data'].tot.results = lodash_clone_1.default(results);
    report['data'].conform = calculateConform(report['data'].tot.results);
    report['data'].tot.info.conform = lodash_clone_1.default(report['data'].conform);
    completeMissingReportElements(report);
    report['data'].score = generateScore(report);
    report['data'].tot.info.score = lodash_clone_1.default(report['data'].score);
    return report;
}
async function initEvaluator() {
    await qualweb.init();
}
exports.initEvaluator = initEvaluator;
async function executeUrlEvaluation(url) {
    const evaluation = await qualweb.evaluate({ url });
    return parseEvaluation(evaluation);
}
exports.executeUrlEvaluation = executeUrlEvaluation;
async function executeHtmlEvaluation(html) {
    const evaluation = await qualweb.evaluate({ html });
    return parseEvaluation(evaluation);
}
exports.executeHtmlEvaluation = executeHtmlEvaluation;
//# sourceMappingURL=middleware.js.map
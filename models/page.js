'use strict';

/**
 * Page Model
 */

/**
 * Libraries and modules
 */
const { size } = require('lodash');
const { success, error } = require('../lib/_response');
const { execute_query } = require('../lib/_database');

const { evaluate_url_and_save } = require('./evaluation');

module.exports.create_page = async (domain_id, uri, tags) => {
  try {
    const date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

    let query = `INSERT INTO Page (DomainId, Uri, Creation_Date) 
      VALUES ("${domain_id}", "${uri}", "${date}")`;
    
    const page = await execute_query(query);

    const tsize = size(tags);
    for (let i = 0 ; i < tsize ; i++) {
      query = `INSERT INTO TagPage (TagId, PageId) VALUES ("${tags[i]}", "${page.insertId}")`;
      await execute_query(query);
    }

    return success(page.insertId);
  } catch(err) {
    return error(err);
  }
}

module.exports.get_page_id = async (url) => {
  try {
    const query = `SELECT PageId FROM Page WHERE Uri = "${url}"`;
    
    const page = await execute_query(query);
    return success(page[0].PageId);
  } catch(err) {
    return error(err);
  }
}

module.exports.get_all_pages = async () => {
  try {
    const query = `SELECT p.* FROM Page as p, Domain as d
      WHERE d.DomainId = p.PageId AND d.Active = "1"`;
    
    const pages = await execute_query(query);
    return success(pages);
  } catch(err) {
    return error(err);
  }
}

module.exports.get_all_pages_info = async () => {
  try {
    const query = `
      SELECT 
        p.PageId,
        p.Uri,
        w.Name as Website,
        e.Score,
        e.A,
        e.AA,
        e.AAA,
        e.Evaluation_Date,
        COUNT(distinct tp.TagId) as Tags
      FROM 
        Page as p
        LEFT OUTER JOIN Evaluation e ON e.PageId = p.PageId AND e.Evaluation_Date = (
          SELECT Evaluation_Date FROM Evaluation 
          WHERE PageId = p.PageId 
          ORDER BY Evaluation_Date DESC LIMIT 1
        )
        LEFT OUTER JOIN TagPage tp ON tp.PageId = p.PageId,
        Domain as d,
        Website as w
      WHERE 
        d.DomainId = p.DomainId AND
        w.WebsiteId = d.WebsiteId
      GROUP BY p.PageId, e.Score, e.A, e.AA, e.AAA, e.Evaluation_Date`;
    
    const pages = await execute_query(query);
    return success(pages);
  } catch(err) {
    return error(err);
  }
}

module.exports.get_user_website_pages = async (user_id, website_id) => {
  try {
    const query = `SELECT 
        distinct p.*,
        e.Score,
        e.A,
        e.AA,
        e.AAA,
        e.Evaluation_Date
      FROM 
        Page as p,
        Website as w,
        Domain as d,
        User as u,
        Evaluation as e
      WHERE
        w.WebsiteId = "${website_id}" AND
        w.UserId = "${user_id}" AND
        d.WebsiteId = w.WebsiteId AND
        d.Active = 1 AND
        p.DomainId = d.DomainId AND
        e.PageId = p.PageId AND
        e.Evaluation_Date IN (SELECT max(Evaluation_Date) FROM Evaluation WHERE PageId = p.PageId);`;
    const pages = await execute_query(query);
    return success(pages);
  } catch(err) {
    return error(err);
  }
}

/**
 * ACCESS STUDIES
 */

module.exports.get_access_studies_user_tag_website_pages = async (user_id, tag, website) => {
  try {
    const query = `SELECT 
        distinct p.*,
        e.Score,
        e.A,
        e.AA,
        e.AAA,
        e.Evaluation_Date
      FROM 
        Page as p,
        Tag as t,
        TagWebsite as tw,
        Website as w,
        Domain as d,
        DomainPage as dp,
        Evaluation as e
      WHERE
        t.Name = "${tag}" AND
        t.UserId = "${user_id}" AND
        tw.TagId = t.TagId AND
        w.WebsiteId = tw.WebsiteId AND
        w.Name = "${website}" AND
        w.UserId = "${user_id}" AND
        d.WebsiteId = w.WebsiteId AND
        dp.DomainId = d.DomainId AND
        p.PageId = dp.PageId AND
        e.PageId = p.PageId AND
        e.Evaluation_Date IN (SELECT max(Evaluation_Date) FROM Evaluation WHERE PageId = p.PageId);`;
    const pages = await execute_query(query);

    return success(pages);
  } catch(err) {
    console.log(err);
    return error(err);
  }
}

module.exports.get_access_studies_user_tag_website_pages_data = async (user_id, tag, website) => {
  try {
    const query = `SELECT 
        distinct p.*,
        e.Score,
        e.Tot,
        e.A,
        e.AA,
        e.AAA,
        e.Evaluation_Date
      FROM 
        Page as p,
        Tag as t,
        TagWebsite as tw,
        Website as w,
        Domain as d,
        DomainPage as dp,
        Evaluation as e
      WHERE
        t.Name = "${tag}" AND
        t.UserId = "${user_id}" AND
        tw.TagId = t.TagId AND
        w.WebsiteId = tw.WebsiteId AND
        w.Name = "${website}" AND
        w.UserId = "${user_id}" AND
        d.WebsiteId = w.WebsiteId AND
        dp.DomainId = d.DomainId AND
        p.PageId = dp.PageId AND
        e.PageId = p.PageId AND
        e.Evaluation_Date IN (SELECT max(Evaluation_Date) FROM Evaluation WHERE PageId = p.PageId);`;
    const pages = await execute_query(query);

    return success(pages);
  } catch(err) {
    console.log(err);
    return error(err);
  }
}

module.exports.add_access_studies_user_tag_website_pages = async (user_id, tag, website, pages) => {
  try {
    const _size = size(pages);
    for (let i = 0 ; i < _size ; i++) {
      let query = `SELECT PageId FROM Page WHERE Uri = "${pages[i]}" LIMIT 1`;
      let page = await execute_query(query);

      if (size(page) > 0) {
        query = `SELECT 
            dp.* 
          FROM
            Tag as t,
            TagWebsite as tw,
            Website as w,
            Domain as d,
            DomainPage as dp
          WHERE 
            t.Name = "${tag}" AND
            t.UserId = "${user_id}" AND 
            tw.TagId = t.TagId AND
            w.WebsiteId = tw.WebsiteId AND
            w.Name = "${website}" AND
            w.UserId = "${user_id}" AND
            d.WebsiteId = w.WebsiteId AND
            dp.DomainId = d.DomainId AND
            dp.PageId = "${page[0].PageId}"`;
        
        let domainPage = await execute_query(query);
        if (size(domainPage) === 0) {
          query = `INSERT INTO DomainPage (DomainId, PageId) 
            SELECT 
              d.DomainId, 
              "${page[0].PageId}" 
            FROM
              Tag as t,
              TagWebsite as tw,
              Website as w,
              Domain as d
            WHERE 
              t.Name = "${tag}" AND
              t.UserId = "${user_id}" AND 
              tw.TagId = t.TagId AND
              w.WebsiteId = tw.WebsiteId AND
              w.Name = "${website}" AND
              w.UserId = "${user_id}" AND
              d.WebsiteId = w.WebsiteId`;
          await execute_query(query);
        }
      } else {
        let date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
        query = `INSERT INTO Page (Uri, Creation_Date) VALUES ("${pages[i]}", "${date}")`;
        let newPage = await execute_query(query);
        
        await evaluate_url_and_save(newPage.insertId, pages[i]);

        query = `INSERT INTO DomainPage (DomainId, PageId) 
          SELECT 
            d.DomainId, 
            "${newPage.insertId}" 
          FROM
            Tag as t,
            TagWebsite as tw,
            Website as w,
            Domain as d
          WHERE 
            t.Name = "${tag}" AND
            t.UserId = "${user_id}" AND 
            tw.TagId = t.TagId AND
            w.WebsiteId = tw.WebsiteId AND
            w.Name = "${website}" AND
            w.UserId = "${user_id}" AND
            d.WebsiteId = w.WebsiteId`;
        await execute_query(query);
      }
    }

    return this.get_access_studies_user_tag_website_pages(user_id, tag, website);
  } catch(err) {
    console.log(err);
    throw error(err);
  }
}

module.exports.remove_access_studies_user_tag_website_pages = async (user_id, tag, website, pagesId) => {
  try {
    const query = `
      DELETE 
        dp.* 
      FROM
        Tag as t,
        TagWebsite as tw,
        Domain as d,
        DomainPage as dp
      WHERE 
        t.Name = "${tag}" AND
        t.UserId = "${user_id}" AND 
        tw.TagId = t.TagId AND 
        d.WebsiteId = tw.WebsiteId AND
        dp.DomainId = d.DomainId AND
        dp.PageId IN ("${pagesId}")`;

    await execute_query(query);

    return this.get_access_studies_user_tag_website_pages(user_id, tag, website);
  } catch(err) {
    console.log(err);
    throw error(err);
  } 
}
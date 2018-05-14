<?php
$txtResults = array (
  'a_01a' =>
  array (
    'tit' => 'Constatou-se que o primeiro link da página nos conduz até à área do conteúdo principal',
    'txt' => 'O objectivo é disponibilizar um mecanismo que permita contornar blocos de material que se repetem em múltiplas páginas Web, passando directamente para o conteúdo principal. Verifique que o primeiro link existente na página Web se encontra sempre visível ou que fica visível quando recebe o foco do teclado.',
  ),
  'a_01b' =>
  array (
    'tit' => 'Constatou-se que o primeiro link da página não nos conduz até à área do conteúdo principal',
    'txt' => 'O objectivo é disponibilizar um mecanismo que permita contornar blocos de material que se repetem em múltiplas páginas Web, passando directamente para o conteúdo principal. O primeiro item interactivo da página Web deve ser um link que nos conduza ao início do conteúdo principal.',
  ),
  'a_02a' =>
  array (
    'tit' => 'Constatou-se que não existem links para contornar blocos de texto',
    'txt' => 'O objectivo é disponibilizar um mecanismo que permita contornar blocos de material, saltando para o fim desses mesmos blocos.',
  ),
  'a_02b' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s link(s) para contornar blocos de conteúdo',
    'txt' => 'O objectivo é disponibilizar um mecanismo que permita contornar blocos de material, saltando para o fim desses mesmos blocos. Verifique que o primeiro link existente na página Web se encontra sempre visível ou que fica visível quando recebe o foco do teclado.',
  ),
  'a_03' =>
  array (
    'tit' => '[Foi|Foram] encontrados %s link(s) em que o conteúdo é composto apenas por uma imagem não legendada',
    'txt' => 'Esta falha ocorre quando um link é composto apenas por conteúdo não textual, tal como uma imagem, e o conteúdo não textual se encontra implementado de tal forma que poderá ser ignorado pela tecnologia de apoio. Quando a imagem é o único conteúdo existente no link, é absolutamente indispensável que essa imagem tenha uma legenda (i.e. um equivalente alternativo textual).',
  ),
  'a_04' =>
  array (
    'tit' => 'Constatou-se que a página não tem links',
    'txt' => 'O objectivo é possibilitar aos utilizadores a localização de informação adicional, disponibilizando links para páginas relacionadas. Sem links, o utilizador não tem qualquer forma de localizar informação relacionada.',
  ),
  'a_05' =>
  array (
    'tit' => '[Foi|Foram] identificado(s) %s caso(s) em que o atributo <code>title</code> do elemento link se limita a repetir o texto existente no link',
    'txt' => 'O atributo <code>title</code> é utilizado para proporcionar informação complementar à existente no texto do link. O atributo <code>title</code> e o texto do link devem ser suficientes para compreender o propósito do link.',
  ),
  'a_06' =>
  array (
    'tit' => '[Foi|Foram] encontrados %s caso(s) em que existem links adjacentes com o mesmo valor colocado no atributo <code>href</code>',
    'txt' => 'Quando nos confrontamos com casos de links adjacentes que apontam exactamente para o mesmo recurso é sinal que os podemos agregar num só link. Visualmente temos a sensação de estar perante um único link, mas eles são percepcionados por muitas pessoas como dois links iguais o que pode resultar confuso.',
  ),
  'a_07' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s grupo(s) de links composto(s) por 10 ou mais links não agrupados por elementos estruturais',
    'txt' => 'Agrupar links relacionados entre si em grupos é uma prática facilitadora da navegação pela página por quem usa tecnologias de apoio. Para o efeito, podemos usar os elementos estruturantes para marcar listas - <code>&lt;ul&gt;</code>; <code>&lt;ol&gt;</code> - ou o elemento <code>map</code> usual na marcação de mapas de imagem.',
  ),
  'a_09' =>
  array (
    'tit' => '[Foi|Foram] localizado(s) %s links com o mesmo texto que apontam destinos diferentes',
    'txt' => 'Esta ocorrência está relacionada com uma falha comum em que links como "clique aqui" ou "ver mais" precisam da informação que os rodeia para contextualizar a sua finalidade. Só pelo contexto é possível aos utilizadores distinguir os links e determinar o seu propósito.',
  ),
  'abbr_01' =>
  array (
    'tit' => '[Foi|Foram] localizada(s) %s abreviatura(s) sem definição',
    'txt' => 'É sempre aconselhável usar o elemento <code>&lt;abbr&gt;</code> para marcar uma abreviatura. Quando se usa HTML e XHTML, os acrónimos devem ser marcados com o elemento <code>&lt;acronym&gt;</code>. Todos os <code>abbr</code> e <code>acronym</code> devem ter um atributo <code>title</code> para descrever as respectivas abreviaturas e acrónimos.',
  ),
  'akey_01' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s valor(es) repetidos nos atributos <code>accesskey</code>',
    'txt' => 'O objectivo é asseguirar que as páginas Web possam ser interpretadas consistentemente pelos agentes de utilizador, incluindo as tecnologias de apoio. Os atributos <code>accesskey</code> necessitam ter valores únicos, caso contrário o resultado pode ser irregular.',
  ),
  'applet_01' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s elemnto(s) <code>applet</code> sem texto alternativo',
    'txt' => 'Cada elemento <code>applet</code> deve conter um equivalente alternativo textual no seu corpo e, para além disso, um equivalente textual no seu atributo <code>alt</code>. É importante o uso de ambos os mecanismos uma vez que os agentes de utilizador suportam de forma inconsistente o atributo alt e o texto alternativo posicionado no corpo do <code>&lt;applet&gt;</code>.',
  ),
  'area_01a' =>
  array (
    'tit' => 'Constatou-se que todos os elementos <code>&lt;area&gt;</code> têm textos alternativos',
    'txt' => 'Certifique-se que o texto alternativo especificado pelo atributo <code>alt</code> serve o mesmo propósito que as diversas partes do mapa de imagem referenciadas pelos elementos <code>&lt;area&gt;</code>.',
  ),
  'area_01b' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s elemento(s) <code>&lt;area&gt;</code> sem texto alternativo',
    'txt' => 'O atributo <code>alt</code> de cada elemento <code>area</code> serve o mesmo propósito de cada área seleccionável de uma imagem. Se o atributo <code>alt</code> não existir, então as tecnologias de apoio não são capazes de identificar o elemento ou transmitir o seu propósito ao utilizador.',
  ),
  'blink_01' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s elemento(s) <code>blink</code> na página',
    'txt' => 'Certos grupos de utilizadores, particularmente os utilizadores com perturbações que causam défices de atenção, encontram no conteúdo cintilante elementos de distracção, dificultando-lhes a capacidade de concentração nas restantes partes do conteúdo da página Web.',
  ),
  'blink_02' =>
  array (
    'tit' => '[Foi|Foram] localizado(s) %s valor(es) <code>blink</code> nas CSS',
    'txt' => 'Certos grupos de utilizadores, particularmente os utilizadores com perturbações que causam défices de atenção, encontram no conteúdo cintilante elementos de distracção, dificultando-lhes a capacidade de concentração nas restantes partes do conteúdo da página Web.',
  ),
  'br_01' =>
  array (
    'tit' => '[Foi|Foram] encontrada(s) %s sequência(s) de 3 ou mais elementos <code>&lt;br&gt;</code>, os quais poderão estar a ser usados para representar os itens de uma lista',
    'txt' => 'O objectivo passa por criar listas de itens relacionados usando os apropriados elementos de lista existentes para o efeito. Certifique-se que o conteúdo que tem a aparência visual de lista se encontra marcado como lista (<code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;dl&gt;</code>).',
  ),
  'color_01' =>
  array (
    'tit' => '[Foi|Foram] identificada(s) %s regra(s) de CSS em que não se especifica ou a cor de letra ou a cor de fundo',
    'txt' => 'A não ser que o autor especifique a cor de fundo e a cor de letra, ele (o autor) nunca poderá garantir que o utilizador irá obter um contraste que satisfaça as suas necessidades. Não é necessário que a cor de letra e a cor de fundo estejam definidos na mesma regra de CSS mas é recomendável que assim seja.',
  ),
  'color_02' =>
  array (
    'tit' => '[Foi|Foram] localizada(s) %s [combinação|combinações] de cor cuja relação de contraste é inferior a 3:1',
    'txt' => 'O objectivo passa por assegurar que os utilizadores são capazes de ler o texto que se apresenta sobre os mais variados fundos. O rácio de contraste 3:1 corresponde ao nível mínimo recomendado para o texto e visão padrão.',
  ),
  'css_01' =>
  array (
    'tit' => '[Foi|Foram] identificado(s) %s caso(s) em que nas CSS se especifica um espaçamento entre linhas menor a 1.5',
    'txt' => 'As pessoas com certas incapacidades cognitivas encontram dificuldade em seguir o texto que cujas linhas se encontram demasiado coladas. Fornecer um maior espaçamento entre linhas e parágrafos permite-lhes localizar mais facilmente a próxima linha e torna mais fácil o reconhecimento do fim de um parágrafo.',
  ),
  'css_validator_01' =>
  array (
    'tit' => 'Constatou-se que não existem erros de validação no código das CSS',
    'txt' => 'A validação não certifica necessariamente uma conformidade total para com uma dada especificação mas é o melhor meio, automático, de confrontar o conteúdo para com essa especificação. O resultado para este teste foi obtido através do <a href="http://jigsaw.w3.org/css-validator/">Serviço de Validação CSS do W3C</a>.',
  ),
  'css_validator_02' =>
  array (
    'tit' => '[Foi|Foram] detectado(s) %s erro(s) de sintaxe gramatical nas CSS',
    'txt' => 'O objectivo é evitar a existência de ambiguidades/discrepâncias nas páginas Web as quais resultam, com frequência, de código que não valida perante as especificação formal. O resultado para este teste foi obtido através do <a href="http://jigsaw.w3.org/css-validator/">Serviço de Validação CSS do W3C</a>.',
  ),
  'dtd_01' =>
  array (
    'tit' => 'Constatou-se que não existe a declaração do <em lang="en" xml:lang="en">Document Type Definition</em>',
    'txt' => 'O <em lang="en" xml:lang="en">Document Type Definition</em> (DTD) não foi localizado. A declaração <code>&lt;!DOCTYPE...&gt;</code> não está a ser usada de forma apropriada.',
  ),
  'ehandler_01' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s caso(s) em que se faz uso de manipuladores de eventos rato-dependentes',
    'txt' => 'Quando os manipuladores de eventos  rato-dependentes, ou dito de forma mais genérica "dependentes de dispositivos apontadores", são o único mecanismo disponível para invocar uma função de conteúdo, os utiilzadores que não usam a visão ou os utilizadores que precisam de utilizar teclados ou outros dispositivos de entrada alternativos que actuam como teclados emulados, ficarão incapacitados em aceder à função do conteúdo.',
  ),
  'ehandler_02' =>
  array (
    'tit' => '[Foi|Foram] identificado(s) %s caso(s) em que não se faz uso de manipuladores de eventos redundantes',
    'txt' => 'Algumas funções rato-dependentes têm uma correspondência lógica para com as funções teclado-dependentes. Deve-se disponibilizar manipuladores de eventos de teclado, que executem a mesma função executada pelos manipuladores de eventos do rato.',
  ),
  'ehandler_03' =>
  array (
    'tit' => '[Foi|Foram] identificado(s) %s caso(s) em que se disponibiliza(m) manipuladores de eventos redundantes',
    'txt' => 'Ao usar manipuladores de eventos que são simultaneamente rato e teclado accionados assegura que o conteúdo pode ser operado por um leque mais vasto de dispositivos.',
  ),
  'ehandler_04' =>
  array (
    'tit' => '[Foi|Foram ] identificado(s) %s caso(s) em que se associam eventos a elementos não interactivos',
    'txt' => 'Os elementos genéricos como <code>&lt;div&gt;</code> e <code>&lt;span&gt;</code> não têm um papel pré-definido. Quando se faz uso destes elementos genéricos para criar controlos de interface de utilizador em HTML, as tecnologias de apoio não dispõem de informação suficiente para descrever e interagir com os controlos.',
  ),
  'embed_01' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s elemento(s) <code>&lt;embed&gt;</code> sem conteúdo alternativo equivalente',
    'txt' => 'Quando utilizamos o elemento <code>&lt;embed&gt;</code>, devemos disponibilizar um conteúdo alternativo equivalente no elemento <code>&lt;noembed&gt;</code>. O elemento <code>noembed</code> apenas é executado se o elemento  <code>embed</code> não for suportado.',
  ),
  'field_01' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s elemento(s) <code>&lt;fieldset&gt;</code> sem descrição',
    'txt' => 'Os controlos de formulário podem ser agrupados, de acordo com a sua afinidade, através do elemento <code>&lt;fieldset&gt;</code>. O primeiro elemento dentro do <code>&lt;fieldset&gt;</code> deve ser o <code>&lt;legend&gt;</code>, o qual serve de etiqueta ou descrição para o grupo de campos.',
  ),
  'field_02' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s elemento(s) <code>&lt;fieldset&gt;</code> fora do formulário',
    'txt' => 'Os controlos de formulário podem ser agrupados através do elemento <code>&lt;fieldset&gt;</code>. O elemento <code>&lt;fieldset&gt;</code> deve se usado apenas dentro do elemento <code>&lt;form&gt;</code>',
  ),
  'focus_01' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s caso(s) em que os scripts são utilizados para remover o foco sempre que o foco é recebido',
    'txt' => 'É preciso verificar as áreas de conteúdo que são percorridas pelo foco e constatar se o foco é inibido por técnicas de programação. Esta prática retira o foco inteiramente do conteúdo, o que significa que o conteúdo fique operável apenas por quem usa dispositivos apontadores como é o caso do rato.',
  ),
  'font_01' =>
  array (
    'tit' => '[Foi|Foram] localizado(s) %s elementos ou atributos de HTML que estão a ser usados para controlo da apresentação visual do texto',
    'txt' => 'As CSS devem ser usadas para controlar a apresentação visual do texto. Pela separação do estilo da marcação do conteúdo, os editores podem simplificar e limpar a forma de marcação do conteúdo, tornando-o, ao mesmo tempo, mais acessível.',
  ),
  'font_02' =>
  array (
    'tit' => '[Foi|Foram] identificado(s) %s caso(s) em que se usa(m) unidades de medida expressas em valores absolutos no tamanho de letra',
    'txt' => 'Quando os tamanhos de letra estão definidos em unidades absolutas, tais como pontos ou pixéis, os comandos do menu Tamanho de Letra existentes no Internet Explorer 7 ou superior não terão quaisquer efeitos sobre os tamanhos de letra da página.',
  ),
  'form_01a' =>
  array (
    'tit' => 'Constatou-se que todos os formulários têm um botão de envio',
    'txt' => 'A intenção com o uso de um botão de envio (submit button) é gerar um pedido HTTP que envie a informação introduzida num formulário, sendo uma forma adequada de controlo que permite aos utilizadores solicitar explicitamente alterações de contexto.',
  ),
  'form_01b' =>
  array (
    'tit' => '[Foi|Foram] identificado(s) %s formulário(s) sem botão de envio',
    'txt' => 'O objectivo é disponibilizar um mecanismo que permita aos utilizadores efectuar explicitamente um pedido de mudança de contexto. Para cada formulário, verifique que o mesmo dispõe de um botão de envio (<code>&lt;input type="submit" ... &gt;</code>, <code>&lt;input type="image" ...&gt;</code>, ou <code>&lt;button type="submit" ...&gt;</code>).',
  ),
  'frame_01' =>
  array (
    'tit' => '[Foi|Foram] identificado(s) %s frame(s) sem o atributo <code>title</code>',
    'txt' => 'O objectivo passa por fazer uso do atributo <code>title</code> do elemento <code>&lt;frame&gt;</code> ou <code>&lt;iframe&gt;</code> para legendar os conteúdos de cada frame (moldura). Disponibiliza-se desta forma uma etiqueta para cada frame por forma a que os utilizadores os possam identificar, diferenciar e explorar.',
  ),
  'frame_02' =>
  array (
    'tit' => 'Constatou-se que a página Frameset tem uma declaração de <acronym title="Declaração do Tipo de Documento">DTD</acronym> incorrecta.',
    'txt' => 'O objectivo passa por assegurar o uso do HTML e do XHTML de acordo com as suas especificações respectivas. Se pretende validar uma página que contém frames, certifique-se que a declaração constante do <code>&lt;!DOCTYPE ... &gt;</code> está configurada para uma DTD Frameset (e.g. HTML 4.01 Frameset ou XHTML 1.0 Frameset).',
  ),
  'hx_01a' =>
  array (
    'tit' => 'Constatou-se que não existem cabeçalhos marcados na página',
    'txt' => 'O objectivo passa por usar os elementos de marcação do HTML e XHTML para identificar os cabeçalhos de um conteúdo, dando assim ao código um valor semântico. Em todas as páginas devemos marcar, pelo menos, um cabeçalho de nível 1, o qual marca o texto que se identifica como sendo o que serve de título. É igualmente boa prática marcar os textos que se identificam como sendo as secções com cabeçalhos de nível 2.',
  ),
  'hx_01b' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s elemento(s) cabeçalho',
    'txt' => 'Em todas as páginas devemos marcar, pelo menos, um cabeçalho de nível 1, o qual marca o texto que se identifica como sendo o que serve de título. É igualmente boa prática marcar os textos que se identificam como sendo as secções com cabeçalhos de nível 2. Faça com os cabeçalhos existentes um índice e verifique se o índice (as suas secções e subsecções) fazem sentido.',
  ),
  'hx_01c' =>
  array (
    'tit' => 'Não existe o cabeçalho principal <code>&lt;h1&gt;</code> da página',
    'txt' => 'Para facilitar a navegação e a compreensão da estrutura geral do documento, os autores devem usar cabeçalhos correctamente encadeados (por exemplo, h2 depois de h1, h2 depois de h1 ou h2, h3 depois de h2 ou h3, h4 depois de h3 ou h4, etc.).',
  ),
  'hx_02' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s cabeçalho(s) cujo conteúdo é apenas uma imagem sem legenda',
    'txt' => 'Esta técnica tem por objectivo tornar os cabeçalhos das secções de uma página Web descritivos. Os cabeçalhos descritivos e os títulos permitem ao utilizador obter uma visão rápida do conteúdo e da organização do documento.',
  ),
  'hx_03' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s caso(s) em que os cabeçalhos não respeitam a cadeia hierárquica',
    'txt' => 'Para facilitar o processo de navegação pela página, é importante que se organizem os cabeçalhos de acordo com os seus níveis hierárquicos  (p.e. h1 seguido por h2; h2 seguido por h2 ou h3; h3 seguido por h3 ou h4, etc).',
  ),
  'id_01' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s valor(es) repetido(s) do atributo <code>id</code>',
    'txt' => 'Valores duplicados afixados no atributo <code>id</code> podem-se tornar problemáticos para os agentes de utilizador, uma vez que os mesmos se apoiam nestes atributos para determinar a relação existente entre as diferentes partes do conteúdo.',
  ),
  'iframe_01' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s elemento(s) <code>&lt;iframe&gt;</code> sem título',
    'txt' => 'O objectivo é usar o atributo "title" do elemento <code>frame</code> ou <code>iframe</code>para legendar os conteúdos de cada frame (moldura). O uso deste atributo permite etiquetar cada um dos frames, permitindo aos utilizadores a sua identificação, descriminação e exploração.',
  ),
  'img_01a' =>
  array (
    'tit' => 'Constatou-se que todas as imagens fazem uso do atributo <code>alt</code>',
    'txt' => 'Verfique que os textos alternativos passam o mesmo significado que são transmitidos pelas imagens.',
  ),
  'img_01b' =>
  array (
    'tit' => '[Foi|Foram] encontrada(s) %s [imagem|imagens] que não têm legenda',
    'txt' => 'Todas as imagens têm de ter uma legenda - i.e. um equivalente alternativo textual colocado no atributo <code>alt</code>. A existência de textos alternativos para as imagens permte que a informação possa ser apresentada de várias formas a uma variedade de agentes de utilizador. Se não o atributo <code>alt</code> não existir, as tecnologias de apoio serão incapazes de identificar a imagem e de passar o seu significado ao utilizador.',
  ),
  'img_02' =>
  array (
    'tit' => '[Foi|Foram] encontrada(s) %s [imagem|imagens] em que a legenda é um espaço vazio',
    'txt' => 'O uso de legendas "nulas" ou com um simples espaço em branco é uma prática comum para imagens decorativas. Este tipo de imagens deve passar para as CSS.',
  ),
  'img_03' =>
  array (
    'tit' => '[Foi|Foram] encontrada(s) %s [imagem|imagens] com uma legenda que não serve de equivalente alternativo',
    'txt' => 'As imagens devem ter equivalentes alternativos textuais que descrevam o propósito das imagens. Nos exemplos de legendas que não servem o propósito de texto alternativo incluem-se "image"/"imagem", "spacer"/"espaçador", "picture"/"fotografia".',
  ),
  'img_04' =>
  array (
    'tit' => '[Foi|Foram] encontrada(s) %s [imagem|imagens] em que o <code>alt</code> tem mais de 100 caracteres',
    'txt' => 'O objectivo é disponibilizar informação num ficheiro, referenciado no atributo <code>longdesc</code> sempre que o texto alternativo afixado no <code>alt</code> não passa convenientemente a função ou informação passada pela imagem.',
  ),
  'inp_img_01a' =>
  array (
    'tit' => 'Constatou-se que todos os botões gráficos têm uma legenda',
    'txt' => 'Para os elementos <code>&lt;input&gt;</code> do tipo "imagem", o atributo <code>alt</code> do elemento <code>&lt;input&gt;</code> é utilizado para disponibilizar uma legenda funcional. Certifique-se que o atributo <code>alt</code> indica a função do botão.',
  ),
  'inp_img_01b' =>
  array (
    'tit' => '[Foi|Foram] localizado(s) %s [botão|botões] gráfico(s) sem legenda',
    'txt' => 'Os textos alternativos são uma das formas primárias de tornar a informação acessível porque o texto pode ser alcançável a partir de qualquer modalidade sensorial (por exemplo, visual, auditiva ou táctil) consoante as necessidades do utilizador.',
  ),
  'input_01' =>
  array (
    'tit' => '[Foi|Foram] identificado(s) %s controlo(s) de formulário sem etiquetas associadas e sem o atributo <code>title</code>',
    'txt' => 'Os elementos <code>&lt;label&gt;</code> associados aos elementos <code>&lt;input&gt;</code> asseguram que a informação relacionada com os campos é lida pelos leitores de ecrã sempre que os campos de edição recebem o foco. O atributo <code>title</code> pode ser usado sempre que seja difícil, em termos de design, acomodar a label ou quando a mesma possa causar confusão.',
  ),
  'input_02' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s controlo(s) de formulário sem <code>&lt;label&gt;</code> associada',
    'txt' => 'As etiquetas devem estar associadas explicitamente a cada controlo do formulário através do par de atributos <code>id</code> e <code>for</code> respectivamente dos elementos <code>&lt;input&gt;</code> e <code>&lt;label&gt;</code>.',
  ),
  'input_02b' =>
  array (
    'tit' => 'Constatou-se que todos os controlos de formulário têm uma etiqueta associada',
    'txt' => 'O objectivo é usar o elemento <code>&lt;label&gt;</code> esteja associado explicitamente ao campo de edição do formulário. Verifique que o elemento <code>&lt;label&gt;</code> identifica o propósito do controlo do formulário e que se encontra visível.',
  ),
  'input_03' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s <code>&lt;input&gt;</code> com o atributo <code>alt</code> que não [é|são] [botão|botões] gráfico(s) de envio',
    'txt' => 'O elemento <code>&lt;input&gt;</code> é utilizado para criar muitos tipos de controlos de formulário. Apesar das DTDs de HTML e XHTML permitirem o uso do atributo <code>alt</code> em todos os seus elementos, o atributo <code>alt</code> deve ser usado, no caso do elemento <code>&lt;input&gt;</code> nos botões gráficos.',
  ),
  'justif_txt_01' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s caso(s) em que se usa texto justificado',
    'txt' => 'Muitas pessoas com incapacidades cognitivas têm grande dificuldade em lidar com blocos de texto que se encontram justificados.',
  ),
  'justif_txt_02' =>
  array (
    'tit' => '[Foi|Foram] identificados %s caso(s) em que se faz justificação de texto via CSS',
    'txt' => 'Muitas pessoas com incapacidades cognitivas têm grande dificuldade em lidar com blocos de texto que se encontram justificados.',
  ),
  'label_01' =>
  array (
    'tit' => '[Foi|Foram] identificada(s) %s <code>&lt;label&gt;</code> sem atributo <code>for</code>',
    'txt' => 'As etiquetas - elementos <code>&lt;label&gt;</code> - devem associar-se explicitamente aos controlos de formulário <code>&lt;input&gt;</code> respectivos através do atributo <code>for</code> posicionado neste e do atributo <code>id</code> posicionado naquele. O valor de ambos os atributos tem de ser igual.',
  ),
  'label_02' =>
  array (
    'tit' => '[Foi|Foram] localizadas %s <code>&lt;label&gt;</code>(s) incorrectamente posicionadas',
    'txt' => 'As etiquetas devem ser posicionadas imediatamente antes dos campos.  As etiquetas para os campos do tipo listas de verificação (<code>checkbox</code>) e do tipo botões de rádio (<code>radio</code>) devem ser poisiconadas logo após os campos.',
  ),
  'label_03' =>
  array (
    'tit' => '[Foi|Foram] encontrada(s) %s elemento(s) <code>&lt;label&gt;</code> sem conteúdo',
    'txt' => 'Esta falha ocorre quando o texto da etiqueta não identifica o propósito do controlo.',
  ),
  'lang_01' =>
  array (
    'tit' => 'Constatou-se que se identifica o idioma principal da página com o código "%s"',
    'txt' => 'Certifique-se que o código do idioma posicionado no elemento <code>&lt;html&gt;</code>, identifica correctamente o idioma principal utilizado na página.',
  ),
  'lang_02' =>
  array (
    'tit' => 'Constatou-se que o código "%s" está incorrecto',
    'txt' => 'O idioma principal da página tem de ser marcado com um código de idioma que esteja de acordo com o padrão estabelecido. Esta técnica tem por objectivo identificar o idioma predefinido de um documento através do atributo <code>lang</code> e/ou <code>xml:lang</code> no elemento <code>html</code>. O código de idioma é composto por um código primário que identifica o idioma e por um subcódigo, opcional, que identifica a variante do idioma. O código primário e o subcódigo encontram-se separados por um hífen. Por exemplo <code>pt-PT</code> para português de Portugal e <code>pt-BR</code> para português do Brasil.',
  ),
  'lang_03' =>
  array (
    'tit' => 'Constatou-se que o atributo %s se encontra em falta',
    'txt' => 'O objectivo é identificar o idioma predefinido de um documento através dos atributos <code>lang</code> e/ou <code>xml:lang</code> do elemento <code>&lt;HTML&gt;</code>.',
  ),
  'lang_04' =>
  array (
    'tit' => 'Constatou-se que os atributos <code>lang</code> e/ou <code>xml:lang</code> estão a ser utilizados de forma incorrecta',
    'txt' => 'Quando usamos HTML apenas devemos utilizar o atributo <code>lang</code>; Quando usamos XHTML 1.1 devemos utilizar <code>xml:lang</code> e em XHTML 1.0 devemos usar os dois atributos com o mesmo código de idioma. O XHTML servido como text/html usa o atributo <code>lang</code> e o atributo <code>xml:lang</code> do elemento <code>html</code> de forma a cumprir com as especificações de XHTML e simultaneamente ser compatível com HTML. Ambos os atributos têm de ter o mesmo valor, Por exemplo <code>lang="pt-PT" xml:lang="pt-PT"</code>.',
  ),
  'lang_05' =>
  array (
    'tit' => 'O tipo de documento não permite o uso do atributo <code>%s</code>',
    'txt' => 'HTML sólo ofrece el uso del atributo <code>lang</code>, XHTML 1.1 sólo permite <code>xml:lang</code>, mientras que XHTML 1.0 (como medida de transición) permite ambos atributos. XHTML servido como text/html utiliza los atributos <code>lang</code> y <code>xml:lang</code> del elemento <code>html</code>.',
  ),
  'layout_01a' =>
  array (
    'tit' => 'Constatou-se que não há elementos a serem usados para controlo visual da apresentação',
    'txt' => 'Para cada parte de texto que tenha uma função semântica, se existir correspondência semântica na linguagem de marcação para o efeito, certifique-se que o conteúdo está a ser marcado correctamente.',
  ),
  'layout_01b' =>
  array (
    'tit' => '[Foi|Foram] encontrado(s) %s elemento(s) usados para controlar a apresentação visual',
    'txt' => 'Enquanto que as características visuais de apresentação induzem a estrutura, essas características não devem tornar a estrutura âmbigua que a torne difícil a interacção para quem use tecnologia de apoio.',
  ),
  'layout_02a' =>
  array (
    'tit' => 'Constatou-se que não há atributos a controlar a apresentação visual',
    'txt' => 'Certifique-se que a informação estrutural e funcionalidade são explícitos e que se encontra claramente separada da informação de apresentação.',
  ),
  'layout_02b' =>
  array (
    'tit' => '[Foi|Foram] localizado(s) %s atributo(s) para controlar a apresentação visual',
    'txt' => 'Separar as camadas de estrutura, funcionalidade e apresentação permite induzir a semântica através de um formato que pode ser programaticamente determinável através da camada estrutural.',
  ),
  'layout_03' =>
  array (
    'tit' => '[Foi|Foram] identificado(s) %s caso(s) em que se utiliza(m) unidades de medida absoluta na definição da largura dos elementos',
    'txt' => 'O objectivo é apresentar conteúdo sem introduzir barras de varrimento horizontais através de técnicas que permitem ajustar o conteúdo ao espaço horizontal disponível.',
  ),
  'link_01' =>
  array (
    'tit' => '[Foi|Foram] localizado(s) %s elemento(s) <code>&lt;link&gt;</code> para navegação',
    'txt' => 'Para cada um dos elementos <code>&lt;link&gt;</code>, certifique-se que ele contém um atributo <code>href</code> válido apontado para um recurso apropriado.',
  ),
  'list_01' =>
  array (
    'tit' => '[Foi|Foram] localizado(s) %s [item|itens] de lista fora da estrutura de listas',
    'txt' => 'Os elementos <code>&lt;li&gt;</code> definem itens de uma lista. As listas não ordenadas [<code>&lt;ul&gt;</code>) e as listas ordenadas (<code>&lt;ol&gt;</code>) são compostas por sequências de elementos <code>&lt;li&gt;</code>.',
  ),
  'long_01' =>
  array (
    'tit' => '[Foi|Foram] localizado(s) %s atributo(s) <code>longdesc</code> com um valor incorrecto',
    'txt' => 'O atributo <code>longdesc</code> tem de ser composto por um URI que aponte a localização onde se encontra a descrição longa.',
  ),
  'marquee_01' =>
  array (
    'tit' => 'Constatou-se que se faz uso do elemento <code>&lt;marquee&gt;</code>',
    'txt' => 'Conteúdo com movimento ou que se auto-actualiza pode constituir uma barreira a quem tenha dificuldade na leitura de texto em movimento ou que leia muito lentamente. Esta técnica pode igualmente trazer problemas a quem leia com o auxílio de um leitor de ecrã.',
  ),
  'meta_01' =>
  array (
    'tit' => 'Constatou-se que se actualiza a página ao fim de algum tempo recorrendo ao elemento <code>meta http-equiv</code>',
    'txt' => 'Os desenvolvedores não podem prever quanto tempo um utilizador precisa para ler uma página; uma actualização antes do tempo pode desorientar os utilizadores.',
  ),
  'meta_02' =>
  array (
    'tit' => 'Constatou-se que se redirecciona a página ao fim de algum tempo recorrendo ao elemento <code>meta http-equiv</code>',
    'txt' => 'É aceitável usar o elemento <code>meta</code> para criar um redireccionamento, desde que o redireccionamento seja de tal forma rápido que é imperceptível pelo utilizador como uma alteração de contexto (time-out igual a zero). Todavia, é preferível utilizar métodos <em lang="en" xml:lang="en">server-side</em> para obter este tipo de funcionalidade.',
  ),
  'object_01' =>
  array (
    'tit' => '[Foi|Foram] localizado(s) %s elemnto(s) <code>&lt;object&gt;</code> sem conteúdo alternativo',
    'txt' => 'Sempre que usar um elemento <code>&lt;object&gt;</code>, disponibilize um equivalente alternativo no corpo  do elemento.',
  ),
  'scope_01' =>
  array (
    'tit' => '[Foi|Foram] localizado(s) %s casos em que os atributos <code>scope</code> têm valor(es) inválidos',
    'txt' => 'O atributo <code>scope</code> identifica se uma célula constitui um cabeçalho de uma linha, de uma coluna, de um grupo de linhas ou de um grupo de colunas. Os valores <code>row</code>, <code>col</code>, <code>rowgroup</code> e <code>colgroup</code> identificam respectivamente os valores que o <code>scope</code> pode assumir.',
  ),
  'table_01' =>
  array (
    'tit' => '[Foi|Foram] encontradas %s tabela(s) sem células de cabeçalho mas com <code>&lt;caption&gt;</code> e/ou <code>summary</code>',
    'txt' => 'Numa tabela <em lang="en" xml:lang="en">layout</em> não é necessário disponibilizar descrições adicionais.  Numa tabela <em lang="en" xml:lang="en">layout</em> não use o atributo <code>summary</code> e não use o elemento <code>&lt;caption&gt;</code>.',
  ),
  'table_02' =>
  array (
    'tit' => '[Foi|Foram] localizada(s) %s tabela(s) de dados sem <code>&lt;caption&gt;</code> ou <code>summary</code>',
    'txt' => 'O elemento <code>&lt;caption&gt;</code> atribui um título à tabela. O atributo <code>summary</code> disponibilizar uma antevisão do propósito dos dados apresentados na tabela ou explica como navegar pela tabela. O elemento <code>&lt;caption&gt;</code> pode ser usado quer se use ou não o atributo <code>summary</code>.',
  ),
  'table_03' =>
  array (
    'tit' => '[Foi|Foram] localizado(s) %s tabela(s) em que o texto afixado em <code>&lt;caption&gt;</code> e <code>summary</code> é o mesmo',
    'txt' => 'O elemento <code>&lt;caption&gt;</code> atribui um título à tabela. O atributo <code>summary</code> disponibilizar uma antevisão do propósito dos dados apresentados na tabela ou explica como navegar pela tabela. Se usarmos os dois, o <code>&lt;caption&gt;</code> não deve duplicar o texto existente em <code>summary</code>.',
  ),
  'table_04' =>
  array (
    'tit' => '[Foi|Foram] encontradas %s tabela(s) com tabelas encadeadas',
    'txt' => 'Se uma tabela contém uma tabela encadeada, o significado percepcionado visualmente pode não ser igualmente percepcionado por quem usa um leitor de ecrã.',
  ),
  'table_05a' =>
  array (
    'tit' => '[Foi|Foram] encontrada(s) %s tabela(s) sem células cabeçalho',
    'txt' => 'Apesar das WCAG não proibirem o uso de tabelas layout, é recomendável o uso de layout com base em CSS de forma a preservar a semântica estrutural dos elementos <code>&lt;table&gt;</code> do HTML bem como preservar a boa prática de separação da estrutura do estilo.',
  ),
  'table_06' =>
  array (
    'tit' => '[Foi|Foram] encontrada(s) %s tabela(s) de dados complexos com uma ou mais células de dados sem o atributo <code>headers</code>',
    'txt' => 'O objectivo é associar cada célula de dados com os cabeçalhos apropriados. O atributo <code>headers</code> deve ser usado quando as células de dados estão associados a mais do que uma linha e/ou coluna de cabeçalhos.',
  ),
  'tidy_01a' =>
  array (
    'tit' => 'O Tidy não detectou erros',
    'txt' => 'O Tidy é um corrector/editor de HTML que analisa e corrige o código das páginas por onde passa. Esta técnica tem por objectivo evitar erros-chave conhecidos por causarem problemas para as tecnologias de apoio sempre que estas tentam "interpretar" os conteúdos.',
  ),
  'tidy_01b' =>
  array (
    'tit' => '[Foi|Foram] detectados pelo Tidy %s aviso(s)/erro(s)',
    'txt' => 'O Tidy é um corrector/editor de HTML que analisa e corrige o código das páginas por onde passa. Esta técnica tem por objectivo evitar erros-chave conhecidos por causarem problemas para as tecnologias de apoio sempre que estas tentam "interpretar" os conteúdos.',
  ),
  'title_01' =>
  array (
    'tit' => 'A página tem %s elemento(s) <code>&lt;title&gt;</code>',
    'txt' => 'Tome nota que o elemento <code>&lt;title&gt;</code> apenas deve aparecer uma vez na página. Todos os documentos HTML e XHTML têm um elemento <code>&lt;title&gt;</code> na secção <code>head</code> que define, numa frase simples, a finalidade do documento (o título do documento). O <code>&lt;title&gt;</code>, sendo diferente de página para página, permite aos utilizadores saberem, de forma rápida, sem necessidade de consultar o conteúdo existente no corpo da página, onde se encontram.',
  ),
  'title_02' =>
  array (
    'tit' => 'Constatou-se que a página não tem o elemento <code>&lt;title&gt;</code>',
    'txt' => 'Tome nota que o elemento <code>&lt;title&gt;</code> é obrigatório. Todos os documentos HTML e XHTML têm um elemento <code>title</code> na secção <code>head</code> que define, numa frase simples, a finalidade do documento (o título do documento). O <code>&lt;title&gt;</code>, sendo diferente de página para página, permite aos utilizadores saberem, de forma rápida, sem necessidade de consultar o conteúdo existente no corpo da página, onde se encontram.',
  ),
  'title_03' =>
  array (
    'tit' => 'Constatou-se que o elemento <code>&lt;title&gt;</code> está vazio',
    'txt' => 'Constitui uma falha sempre que a página Web tem um elemento <code>title</code>, mas o seu conteúdo não identifica os conteúdos ou o propósito da página.',
  ),
  'title_04' =>
  array (
    'tit' => 'O título da página contém %s [carácter|caracteres]',
    'txt' => 'O <code>&lt;title&gt;</code> de cada página deve: (1) identificar o assunto da página; (2) fazer sentido quando lido fora do contexto; (3) ser curto.',
  ),
  'title_05' =>
  array (
    'tit' => 'Título da página com sequências de caracteres não textuais: %s',
    'txt' => 'O <code>&lt;title&gt;</code> de cada página deve: (1) identificar o assunto da página; (2) fazer sentido quando lido fora do contexto; (3) ser curto.',
  ),
  'title_06' =>
  array (
    'tit' => 'Constatou-se que a página tem um elemento <code>&lt;title&gt;</code>',
    'txt' => 'Certifique-se até que ponto o <code>&lt;title&gt;</code> identifica os conteúdos ou o propósito da página Web.',
  ),
  'title_07' =>
  array (
    'tit' => 'Constatou-se que esta página tem um <code>&lt;title&gt;</code> igual ao de outras páginas do sítio',
    'txt' => 'Define-se como condição de falha sempre que uma página Web tem um título, mas o título é o mesmo que se encontra noutras páginas do mesmo sítio. Cada página deve possuir um título único que identifique o propósito dos conteúdos.',
  ),
  'values_01a' =>
  array (
    'tit' => 'Constatou-se que em %s caso(s), se faz uso de unidades de medida absolutas',
    'txt' => 'O objectivo é ser capaz de apresentar o conteúdo sem a necessidade de introduzir barras de varrimento horizontais, usando técnicas de layout que permitem adaptar os conteúdos ao espaço disponível.',
  ),
  'values_01b' =>
  array (
    'tit' => 'Constatou-se que todos os atributos estão expressos em unidades de medida relativas',
    'txt' => 'O objectivo é ser capaz de apresentar o conteúdo sem a necessidade de introduzir barras de varrimento horizontais, usando técnicas de layout que permitem adaptar os conteúdos ao espaço disponível.',
  ),
  'values_02a' =>
  array (
    'tit' => 'Constatou-se que em %s caso(s), as unidades de medida existentes na CSS estão expressas em valores absolutos',
    'txt' => 'Para que seja possível aos utilizadores que necessitam aumentar o tamanho da letra sem necessidade de efectuarem varrimentos horizontais é importante que os editores façam uso de unidades de medida relativas na definição da largura dos contentores de informação, nomeadamente através do uso de valores em percentagem.',
  ),
  'values_02b' =>
  array (
    'tit' => 'Constatou-se que todas as unidades de medida existentes na CSS estão expressas em valores relativos',
    'txt' => 'Aumente o tamanho da letra em 200% e certifique-se de que é possível ler todas as linhas do texto sem necessidade de efectuar varrimentos horizontais.',
  ),
  'w3c_validator_01a' =>
  array (
    'tit' => 'Não existem erros de validação na linguagem de marcação',
    'txt' => 'O objectivo é eliminar ambiguidades nas páginas Web derivadas de código que não está em conformidade para com as especificações formais em vigor. Os resultados deste teste foram obtidos através do <a href="http://validator.w3.org/" title="Validação (x)HTML">Serviço de Validação da Marcação do W3C</a>.',
  ),
  'w3c_validator_01b' =>
  array (
    'tit' => '[Foi|Foram] encontrados %s erro(s) de validação na linguagem de marcação',
    'txt' => 'O objectivo é eliminar ambiguidades nas páginas Web derivadas de código que não está em conformidade para com as especificações formais em vigor. Os resultados deste teste foram obtidos através do <a href="http://validator.w3.org/" title="Validação (x)HTML">Serviço de Validação da Marcação do W3C</a>.',
  ),
  'win_01' =>
  array (
    'tit' => 'Constatou-se que ao carregar esta página, abre-se, de imediato, uma nova janela por cima dos conteúdos',
    'txt' => 'O objectivo passa por assegurar que as páginas não desorientam os utilizadores ao abrirem uma ou mais janelas que se sobrepõem à página que foi carregada.',
  ),
  'noscript' =>
  array (
    'tit' => 'Há elementos &lt;script&gt; no corpo da página que não têm o correspondente &lt;noscript&gt;',
  ),
  'flash' =>
  array (
    'tit' => 'Utiliza-se tecnología Flash e não existem links para outras páginas',
  ),
);
?>
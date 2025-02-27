/* eslint-disable comma-dangle */

/**
 * The import rules object defines elements that can be removed (cleanup) from the source
 * document and elements that should be transformed into blocks.
 */
const importRules = {
  root: '#main',
  cleanup: {
    start: [
      'style',
      'source',
      'script',
      'noscript',
      'iframe',
      'link',
      '#_qantas_menu',
      '.header-nav',
      'footer'
    ],
    end: []
  },
  blocks: [
    {
      type: 'metadata',
      insertMode: 'append',
      selectors: [],
      variants: []
    },
    {
      type: 'aiheader-b89j4x-1102402271',
      selectors: [
        'div.content-wrap'
      ],
      variants: []
    },
    {
      type: 'aifooter-b89j4x-953139808',
      selectors: [
        'footer'
      ],
      variants: []
    },
    {
      type: 'aicolumns-b89j4x-2089301035',
      selectors: [
        'header'
      ],
      variants: []
    },
    {
      type: 'aicolumns-b89j4x-61971621',
      selectors: [
        'div.main-section table:first-of-type'
      ],
      variants: []
    },
    {
      type: 'aicolumns-b89j4x-61971652',
      selectors: [
        'div.main-section table:nth-of-type(2)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-83237627',
      selectors: [
        'div.page-intro'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1467159295',
      selectors: [
        'div.social'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-83237596',
      selectors: [
        'div.page-content'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1115913533',
      selectors: [
        'div.page-content p:nth-of-type(1)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1115913502',
      selectors: [
        'div.page-content p:nth-of-type(2)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1115913471',
      selectors: [
        'div.page-content p:nth-of-type(3)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1115913440',
      selectors: [
        'div.page-content p:nth-of-type(4)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1115913409',
      selectors: [
        'div.page-content p:nth-of-type(5)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1115913378',
      selectors: [
        'div.page-content p:nth-of-type(6)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-2074746772',
      selectors: [
        'div.sidebar-module h2'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-2088480423',
      selectors: [
        'ul.sidebar-posts'
      ],
      variants: []
    }
  ],
  transformers: []
};

export default importRules;

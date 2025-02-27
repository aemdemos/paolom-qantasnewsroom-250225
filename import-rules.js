/* eslint-disable comma-dangle */

/**
 * The import rules object defines elements that can be removed (cleanup) from the source
 * document and elements that should be transformed into blocks.
 */
const importRules = {
  root: '.main-section #main',
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
        '.container'
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
        '.page-content table:first-of-type'
      ],
      variants: []
    },
    {
      type: 'aicolumns-b89j4x-61971652',
      selectors: [
        '.page-content table:nth-of-type(2)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-83237627',
      selectors: [
        '.page-intro'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1467159295',
      selectors: [
        '.social'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-83237596',
      selectors: [
        '.social',
        '.print-friendly-version'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1115913533',
      selectors: [
        '.page-content p:first-of-type'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1115913502',
      selectors: [
        '.page-content p:nth-of-type(2)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1115913471',
      selectors: [
        '.page-content p:nth-of-type(3)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1115913440',
      selectors: [
        '.page-content p:nth-of-type(4)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1115913409',
      selectors: [
        '.page-content p:nth-of-type(5)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1115913378',
      selectors: [
        '.page-content p:nth-of-type(6)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-2074746772',
      selectors: [
        '.sidebar-module h2'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-2088480423',
      selectors: [
        '.sidebar-posts'
      ],
      variants: []
    }
  ],
  transformers: []
};

export default importRules;

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
        '#main > div.container'
      ],
      variants: []
    },
    {
      type: 'aifooter-b89j4x-953139808',
      selectors: [
        '#main > footer'
      ],
      variants: []
    },
    {
      type: 'aicolumns-b89j4x-2089301035',
      selectors: [
        '#main > header'
      ],
      variants: []
    },
    {
      type: 'aicolumns-b89j4x-61971621',
      selectors: [
        '#main .main-section .page-content table:first-of-type'
      ],
      variants: []
    },
    {
      type: 'aicolumns-b89j4x-61971652',
      selectors: [
        '#main .main-section .page-content table:nth-of-type(2)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-83237627',
      selectors: [
        '#main .main-section .page-intro'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1467159295',
      selectors: [
        '#main .main-section .social'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-83237596',
      selectors: [
        '#main .main-section .social'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1115913533',
      selectors: [
        '#main .main-section .page-content p:first-of-type'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1115913502',
      selectors: [
        '#main .main-section .page-content p:nth-of-type(2)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1115913471',
      selectors: [
        '#main .main-section .page-content p:nth-of-type(3)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1115913440',
      selectors: [
        '#main .main-section .page-content p:nth-of-type(4)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1115913409',
      selectors: [
        '#main .main-section .page-content p:nth-of-type(5)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-1115913378',
      selectors: [
        '#main .main-section .page-content p:nth-of-type(6)'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-2074746772',
      selectors: [
        '#main .sidebar .module-title'
      ],
      variants: []
    },
    {
      type: 'aidefaultContent-b89j4x-2088480423',
      selectors: [
        '#main .sidebar .sidebar-posts'
      ],
      variants: []
    }
  ],
  transformers: []
};

export default importRules;

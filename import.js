/* global WebImporter */
/* eslint-disable no-console, class-methods-use-this */

import importRules from './import-rules.js';
import metadataParser from './parsers/metadata.js';
import aiheaderB89j4x1102402271Parser from './parsers/aiheader-b89j4x-1102402271.js';
import aifooterB89j4x953139808Parser from './parsers/aifooter-b89j4x-953139808.js';
import aicolumnsB89j4x2089301035Parser from './parsers/aicolumns-b89j4x-2089301035.js';
import aicolumnsB89j4x61971621Parser from './parsers/aicolumns-b89j4x-61971621.js';
import aicolumnsB89j4x61971652Parser from './parsers/aicolumns-b89j4x-61971652.js';
import aidefaultContentB89j4x83237627Parser from './parsers/aidefaultContent-b89j4x-83237627.js';
import aidefaultContentB89j4x1467159295Parser from './parsers/aidefaultContent-b89j4x-1467159295.js';
import aidefaultContentB89j4x83237596Parser from './parsers/aidefaultContent-b89j4x-83237596.js';
import aidefaultContentB89j4x1115913533Parser from './parsers/aidefaultContent-b89j4x-1115913533.js';
import aidefaultContentB89j4x1115913502Parser from './parsers/aidefaultContent-b89j4x-1115913502.js';
import aidefaultContentB89j4x1115913471Parser from './parsers/aidefaultContent-b89j4x-1115913471.js';
import aidefaultContentB89j4x1115913440Parser from './parsers/aidefaultContent-b89j4x-1115913440.js';
import aidefaultContentB89j4x1115913409Parser from './parsers/aidefaultContent-b89j4x-1115913409.js';
import aidefaultContentB89j4x1115913378Parser from './parsers/aidefaultContent-b89j4x-1115913378.js';
import aidefaultContentB89j4x2074746772Parser from './parsers/aidefaultContent-b89j4x-2074746772.js';
import aidefaultContentB89j4x2088480423Parser from './parsers/aidefaultContent-b89j4x-2088480423.js';

/**
 * Custom parser functions for each block type.
 *
 * Each parser function will be passed a root HTML element and
 * is expected to return a 2-dimensional array or an object of name/value
 * pairs that will be used to construct each block.
 */
const parsers = {
  metadata: metadataParser,
  aiheaderB89j4x1102402271: aiheaderB89j4x1102402271Parser,
  aifooterB89j4x953139808: aifooterB89j4x953139808Parser,
  aicolumnsB89j4x2089301035: aicolumnsB89j4x2089301035Parser,
  aicolumnsB89j4x61971621: aicolumnsB89j4x61971621Parser,
  aicolumnsB89j4x61971652: aicolumnsB89j4x61971652Parser,
  aidefaultContentB89j4x83237627: aidefaultContentB89j4x83237627Parser,
  aidefaultContentB89j4x1467159295: aidefaultContentB89j4x1467159295Parser,
  aidefaultContentB89j4x83237596: aidefaultContentB89j4x83237596Parser,
  aidefaultContentB89j4x1115913533: aidefaultContentB89j4x1115913533Parser,
  aidefaultContentB89j4x1115913502: aidefaultContentB89j4x1115913502Parser,
  aidefaultContentB89j4x1115913471: aidefaultContentB89j4x1115913471Parser,
  aidefaultContentB89j4x1115913440: aidefaultContentB89j4x1115913440Parser,
  aidefaultContentB89j4x1115913409: aidefaultContentB89j4x1115913409Parser,
  aidefaultContentB89j4x1115913378: aidefaultContentB89j4x1115913378Parser,
  aidefaultContentB89j4x2074746772: aidefaultContentB89j4x2074746772Parser,
  aidefaultContentB89j4x2088480423: aidefaultContentB89j4x2088480423Parser,
};

/**
 * Transformation functions against main content.
 */
const transformers = {
};

function isEmpty(cells) {
  if (Array.isArray(cells)) {
    return cells.length === 0;
  } if (typeof cells === 'object' && cells !== null) {
    return Object.keys(cells).length === 0;
  }
  return false;
}

/**
 * Return a path that describes the document being transformed (file name, nesting...).
 * The path is then used to create the corresponding Word document.
 * @param {String} url The url of the document being transformed.
 * @param {HTMLDocument} document The document
 */
function generateDocumentPath({ url }) {
  let p = new URL(url).pathname;
  if (p.endsWith('/')) {
    p = `${p}index`;
  }
  p = decodeURIComponent(p)
    .toLowerCase()
    .replace(/\.html$/, '')
    .replace(/[^a-z0-9/]/gm, '-');
  return WebImporter.FileUtils.sanitizePath(p);
}

function computeScriptName(block) {
  return block.replace(/-./g, (match) => match.charAt(1).toUpperCase());
}

export default {
  /**
   * Apply DOM operations to the provided document and return
   * the root element to be then transformed to Markdown.
   * @param {HTMLDocument} document The document
   * @param {string} url The url of the page imported
   * @param {string} html The raw html (the document is cleaned up during preprocessing)
   * @param {object} params Object containing some parameters given by the import process.
   * @returns {HTMLElement} The root element to be transformed
   */
  transform: (source) => {
    // eslint-disable-next-line no-unused-vars 
    const { document, url, html, params } = source;

    const {
      root = 'main',
      cleanup: {
        start: removeStart = [],
        end: removeEnd = [],
      },
      blocks = [],
    } = importRules;
    
    // define the main element: the one that will be transformed to Markdown
    const main = document.querySelector(root) || document.body;
    
    // attempt to remove non-content elements
    WebImporter.DOMUtils.remove(main, removeStart);
    
    // transform all blocks using cell parsers
    blocks.forEach((blockCfg) => {
      const {
        type, variants, selectors = [], insertMode = 'replace',
      } = blockCfg;
      const parserFn = parsers[computeScriptName(type)];
      const elements = selectors.length
        ? selectors.reduce((acc, selector) => [...acc, ...main.querySelectorAll(selector)], [])
        : [main];
      // process every element for this block
      elements.forEach((element) => {
        // parse the element into block items
        let items = parserFn ? parserFn.call(this, element, { ...source }) : [];
        if (Array.isArray(items)) {
          items = items.filter((item) => item);
        }
        if (!isEmpty(items)) {
          // create the block
          const block = WebImporter.Blocks.createBlock(document, {
            name: WebImporter.Blocks.computeBlockName(type),
            variants,
            cells: items,
          });
          if (block) {
            // add block to DOM
            if (insertMode === 'append') {
              main.append(block);
            } else if (insertMode === 'prepend') {
              main.prepend(block);
            } else if (element !== main) {
              element.replaceWith(block);
            }
          }
        }
      });
    });
    
    // perform any additional transformations
    Object.values(transformers).forEach((transformerFn) => transformerFn.call(this, main, { ...source }));
    
    WebImporter.rules.transformBackgroundImages(main, document);
    WebImporter.rules.adjustImageUrls(main, url, params.originalURL);
    WebImporter.rules.convertIcons(main, document);
    
    // attempt to remove non-content elements
    WebImporter.DOMUtils.remove(main, removeEnd);

    return [{
      element: main,
      path: generateDocumentPath(source),
    }];
  },
};

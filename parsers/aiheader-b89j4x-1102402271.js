
export default function parse(element, { document }) {
  // Initialize the two-dimensional array with 1 column and 2 rows
  const table = [[], []];

  // Convert the child xpaths to CSS selectors relative to the element
  const selectors = [
    ":scope > div:first-child", // Equivalent to /html[1]/body[1]/div[2]/div[1]
    ":scope > div:nth-child(2)" // Equivalent to /html[1]/body[1]/div[2]/div[2]
  ];

  // Find elements using the CSS selectors and add them to the table
  selectors.forEach((selector, index) => {
    const elements = element.querySelectorAll(selector);
    if (elements.length > 0) {
      // If multiple elements should be placed in the same cell, add them to an array first
      const cellContent = Array.from(elements);
      table[index][0] = cellContent;
    }
  });

  return table;
}

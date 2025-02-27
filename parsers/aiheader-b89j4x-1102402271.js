
export default function parse(element, { document }) {
  // Initialize the two-dimensional array with 1 column and 2 rows
  const table = [[], []];

  // Convert the child xpaths to CSS selectors relative to the element
  const childSelectors = [
    ":scope > div:first-child", // Equivalent to /html[1]/body[1]/div[2]/div[1]
    ":scope > div:nth-child(2)" // Equivalent to /html[1]/body[1]/div[2]/div[2]
  ];

  // Find elements using the CSS selectors and add them to the table
  childSelectors.forEach((selector, index) => {
    const childElement = element.querySelector(selector);
    if (childElement) {
      // If elements should be placed in the same cell, create an array
      table[index][0] = childElement;
    }
  });

  return table;
}

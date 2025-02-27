
export default function parse(element, { document }) {
  // Initialize the two-dimensional array with 1 column and 2 rows
  const table = [[], []];

  // Convert the xpaths to CSS selectors relative to the element
  const selectors = [
    ":scope > div:first-child", // Equivalent to /html[1]/body[1]/div[2]/div[1]
    ":scope > div:nth-child(2)" // Equivalent to /html[1]/body[1]/div[2]/div[2]
  ];

  // Find elements using the CSS selectors and add them to the table
  selectors.forEach((selector, index) => {
    const foundElements = element.querySelectorAll(selector);
    if (foundElements.length > 0) {
      // If multiple elements are found for the same cell, add them to an array first
      const cellContent = Array.from(foundElements);
      table[index][0] = cellContent;
    }
  });

  return table;
}

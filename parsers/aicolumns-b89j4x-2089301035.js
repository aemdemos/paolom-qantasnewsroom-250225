
export default function parse(element, { document }) {
  // Initialize the two-dimensional array with 1 row and 2 columns
  const table = Array.from({ length: 1 }, () => new Array(2).fill(null));

  // Convert the provided XPaths to CSS selectors
  const selectors = [
    ":scope > div > div > a", // Converted XPath: /html[1]/body[1]/div[3]/header[1]/div[1]/div[1]/a[1]
    ":scope > div > nav > ul" // Converted XPath: /html[1]/body[1]/div[3]/header[1]/div[1]/nav[1]/ul[1]
  ];

  // Find elements using the CSS selectors and add them to the table
  selectors.forEach((selector, index) => {
    const foundElements = element.querySelectorAll(selector);
    if (foundElements.length > 0) {
      // If multiple elements are found for the same cell, wrap them in an array
      table[0][index] = foundElements.length === 1 ? foundElements[0] : Array.from(foundElements);
    }
  });

  return table;
}

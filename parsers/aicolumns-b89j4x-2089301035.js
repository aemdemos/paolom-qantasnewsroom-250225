
export default function parse(element, { document }) {
  // Initialize the two-dimensional array with 1 row and 2 columns
  const table = Array.from({ length: 1 }, () => new Array(2).fill(null));

  // Convert the provided xpaths to generic CSS selectors relative to the element
  const selectors = [
    ":scope > div > div > a", // CSS selector for /html[1]/body[1]/div[3]/header[1]/div[1]/div[1]/a[1]
    ":scope > div > nav > ul" // CSS selector for /html[1]/body[1]/div[3]/header[1]/div[1]/nav[1]/ul[1]
  ];

  // Find elements using the CSS selectors and add them to the table
  selectors.forEach((selector, index) => {
    const foundElements = element.querySelectorAll(selector);
    if (foundElements.length > 0) {
      // If multiple elements are found for the same cell, add them to an array first
      const elementsArray = Array.from(foundElements);
      table[0][index] = elementsArray.length === 1 ? elementsArray[0] : elementsArray;
    }
  });

  return table;
}

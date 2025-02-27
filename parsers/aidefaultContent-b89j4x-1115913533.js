
export default function parse(element, { document }) {
  // Initialize the two-dimensional array with 1 row and 1 column
  const table = [[]];

  // If the element has child nodes, add them to the array
  if (element.hasChildNodes()) {
    const children = Array.from(element.children);
    // Since we only need 1 row and 1 column, we create an array of child elements
    // and add it as the first cell of the table
    table[0][0] = children;
  }

  // Return the two-dimensional array
  return table;
}

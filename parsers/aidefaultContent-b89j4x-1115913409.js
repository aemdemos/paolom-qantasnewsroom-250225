
export default function parse(element, { document }) {
  // Initialize the two-dimensional array with 1 row and 1 column
  const table = [[]];

  // If no specific child xpaths are provided, include all child elements of the element
  const childElements = element.querySelectorAll(':scope > *');

  // Create an array to hold all child elements for the cell
  const cellContent = Array.from(childElements);

  // Place the array of child elements in the first cell of the table
  table[0][0] = cellContent;

  // Return the two-dimensional array
  return table;
}

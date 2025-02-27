
export default function parse(element, { document }) {
  // Initialize a two-dimensional array with one row and one column
  const table = [[]];

  // Use the :scope pseudo-class to query for immediate children of the element
  const children = element.querySelectorAll(':scope > *');

  // Create an array to hold all child elements
  const cellContent = Array.from(children);

  // Place the array of child elements in the first cell of the table
  table[0][0] = cellContent;

  // Return the two-dimensional array
  return table;
}

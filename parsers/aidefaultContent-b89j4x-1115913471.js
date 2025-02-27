
export default function parse(element, { document }) {
  // Initialize the two-dimensional array with 1 row and 1 column
  let table = [[]];

  // Use the :scope pseudo-class to query for immediate children of the element
  let children = element.querySelectorAll(':scope > *');

  // Create an array to hold all child elements
  let cellContent = Array.from(children);

  // Add the array of child elements to the first cell of the table
  table[0][0] = cellContent;

  // Return the two-dimensional array
  return table;
}

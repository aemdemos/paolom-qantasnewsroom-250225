
export default function parse(element, { document }) {
  // Initialize the two-dimensional array with one row and one column
  const table = [[]];

  // Use the :scope pseudo-class to query for immediate children of the element
  const children = element.querySelectorAll(':scope > *');

  // Create an array to hold the child elements for the first cell
  const firstCell = [];

  // Add all immediate child elements to the first cell array
  for (const child of children) {
    firstCell.push(child);
  }

  // Add the first cell array to the first row of the table
  table[0].push(firstCell);

  // Return the two-dimensional array
  return table;
}

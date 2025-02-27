
export default function parse(element, { document }) {
  // Initialize a two-dimensional array with one row and one column
  const table = [[]];

  // Use the :scope pseudo-class to query only the children of the passed element
  const children = element.querySelectorAll(':scope > *');

  // Create an array to hold the child elements for the cell
  const cellContent = [];

  // Add all child elements to the cellContent array
  for (const child of children) {
    cellContent.push(child);
  }

  // Add the cellContent array to the first cell of the table
  table[0][0] = cellContent;

  // Return the two-dimensional array
  return table;
}

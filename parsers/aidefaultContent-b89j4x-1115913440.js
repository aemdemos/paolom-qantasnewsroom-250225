
export default function parse(element, { document }) {
  // Initialize a two-dimensional array with one row and one column
  const table = [[]];

  // Use the :scope pseudo-class to query only the children of the passed element
  const children = element.querySelectorAll(':scope > *');

  // Create an array to hold the child elements for the first cell
  const firstCell = [];

  // Add all child elements to the first cell array
  children.forEach(child => {
    firstCell.push(child);
  });

  // Add the first cell array to the first row of the table
  table[0].push(firstCell);

  // Return the two-dimensional array
  return table;
}

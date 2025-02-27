
export default function parse(element, { document }) {
  // Initialize the two-dimensional array with one row and one column
  const table = [[]];

  // Use the :scope pseudo-class to query for immediate children of the element
  const children = element.querySelectorAll(':scope > *');

  // Create an array to hold the child elements for the cell
  const cellContent = [];

  // Add all child elements to the cellContent array
  children.forEach(child => {
    cellContent.push(child);
  });

  // Add the cellContent array to the first row of the table
  table[0].push(cellContent);

  // Return the two-dimensional array
  return table;
}

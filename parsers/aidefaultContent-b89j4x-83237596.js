
export default function parse(element, { document }) {
  // Initialize the two-dimensional array with 1 row and 1 column
  const table = [[]];

  // Use the ':scope' pseudo-class to find immediate child elements of the provided element
  const childElements = element.querySelectorAll(':scope > *');

  // Create an array to hold all child elements
  const cellContent = Array.from(childElements);

  // Add the array of child elements to the first cell of the table
  table[0][0] = cellContent;

  // Return the two-dimensional array
  return table;
}

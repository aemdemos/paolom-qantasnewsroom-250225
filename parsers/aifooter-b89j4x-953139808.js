
export default function parse(element, { document }) {
  // Initialize the two-dimensional array with one row and one column
  const table = [[]];

  // Use the :scope pseudo-class to query only the children of the element
  const children = element.querySelectorAll(':scope > *');

  // Add all child elements to the first cell of the two-dimensional array
  table[0][0] = Array.from(children);

  return table;
}

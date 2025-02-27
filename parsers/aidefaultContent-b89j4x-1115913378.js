
export default function parse(element, { document }) {
  // Initialize the two-dimensional array with 1 row and 1 column
  const table = [[]];

  // If the element has child nodes, add them to the array
  if (element.hasChildNodes()) {
    const children = element.children;
    const cellContent = Array.from(children); // Convert HTMLCollection to Array
    table[0].push(cellContent); // Add all child elements to the first cell
  } else {
    // If there are no child nodes, add the element itself to the array
    table[0].push(element);
  }

  return table;
}

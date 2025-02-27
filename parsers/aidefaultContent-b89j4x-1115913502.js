
export default function parse(element, { document }) {
  // Initialize the two-dimensional array with 1 row and 1 column
  const table = [[]];

  // If the element has child nodes, add them to the array
  if (element.hasChildNodes()) {
    const children = element.children;
    for (let i = 0; i < children.length; i++) {
      // Since we only have 1 column, we create a new row for each child
      table.push([children[i]]);
    }
  }

  // Remove the first empty row that was initialized at the beginning
  table.shift();

  return table;
}

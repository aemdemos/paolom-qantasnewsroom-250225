
export default function parse(element, { document }) {
  // Initialize a two-dimensional array with 21 rows and 3 columns
  const rows = 21;
  const cols = 3;
  const tableArray = Array.from({ length: rows }, () => new Array(cols));

  // Loop through each row and column to find the corresponding elements
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Construct the CSS selector for the current cell
      const selector = `:scope > tbody > tr:nth-child(${row + 1}) > td:nth-child(${col + 1})`;
      // Use querySelector to find the element within the passed element
      const cellElement = element.querySelector(selector);
      // Place the element reference in the two-dimensional array
      tableArray[row][col] = cellElement;
    }
  }

  // Return the two-dimensional array
  return tableArray;
}

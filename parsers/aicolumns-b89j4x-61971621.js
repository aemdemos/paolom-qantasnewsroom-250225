
export default function parse(element, { document }) {
  // Initialize a two-dimensional array with 32 rows and 3 columns
  const rows = 32;
  const columns = 3;
  const tableArray = Array.from({ length: rows }, () => new Array(columns));

  // Loop through each row and column to find the corresponding elements
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      // Construct the CSS selector for the current cell
      // Note: nth-child is 1-indexed, so we add 1 to row and col
      const selector = `:scope > tbody > tr:nth-child(${row + 1}) > td:nth-child(${col + 1})`;
      // Query the element for the selector
      const cellElement = element.querySelector(selector);
      // Place the element reference in the two-dimensional array
      tableArray[row][col] = cellElement;
    }
  }

  // Return the two-dimensional array
  return tableArray;
}

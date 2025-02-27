
export default function parse(element, { document }) {
  // Initialize a two-dimensional array with 21 rows and 3 columns
  const tableData = new Array(21).fill(null).map(() => new Array(3).fill(null));

  // Use a CSS selector to target the table rows within the provided element
  const rows = element.querySelectorAll(':scope > tbody > tr');

  // Iterate over each row and each cell within the row
  rows.forEach((row, rowIndex) => {
    const cells = row.querySelectorAll(':scope > td');
    cells.forEach((cell, cellIndex) => {
      // Add the cell element to the corresponding position in the two-dimensional array
      if (rowIndex < tableData.length && cellIndex < tableData[rowIndex].length) {
        tableData[rowIndex][cellIndex] = cell;
      }
    });
  });

  return tableData;
}

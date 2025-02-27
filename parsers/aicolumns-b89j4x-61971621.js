
export default function parse(element, { document }) {
  // Initialize a two-dimensional array with 32 rows and 3 columns
  const tableData = Array.from({ length: 32 }, () => new Array(3));

  // Use querySelectorAll to find all 'tr' elements within the table
  const rows = element.querySelectorAll(':scope > tbody > tr');

  // Iterate over each row
  rows.forEach((row, rowIndex) => {
    // Find all 'td' elements within the current row
    const cells = row.querySelectorAll(':scope > td');

    // Iterate over each cell
    cells.forEach((cell, cellIndex) => {
      // Place the element reference in the corresponding cell of the two-dimensional array
      tableData[rowIndex][cellIndex] = cell;
    });
  });

  return tableData;
}

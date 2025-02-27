
export default function parse(element, { document }) {
  // Initialize a two-dimensional array with 32 rows and 3 columns
  const tableData = Array.from({ length: 32 }, () => new Array(3));

  // Use querySelectorAll with a relative CSS selector to find all 'tr' elements within the table
  const rows = element.querySelectorAll(':scope > tbody > tr');

  // Iterate over each row and each cell within the row
  rows.forEach((row, rowIndex) => {
    const cells = row.querySelectorAll(':scope > td');
    cells.forEach((cell, cellIndex) => {
      // Place the cell element reference in the corresponding position in the two-dimensional array
      tableData[rowIndex][cellIndex] = cell;
    });
  });

  // Return the two-dimensional array
  return tableData;
}

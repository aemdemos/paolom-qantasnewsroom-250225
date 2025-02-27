
export default function parse(element, { document }) {
  // Initialize a two-dimensional array to hold the table cells
  const tableData = [];

  // Use querySelectorAll to find all 'tr' elements within the table
  const rows = element.querySelectorAll(':scope > tbody > tr');

  // Iterate over each row
  rows.forEach((tr, rowIndex) => {
    // Initialize an array to hold the cells for the current row
    const rowData = [];

    // Use querySelectorAll to find all 'td' elements within the current row
    const cells = tr.querySelectorAll(':scope > td');

    // Iterate over each cell
    cells.forEach((td, cellIndex) => {
      // Add the cell element to the rowData array
      rowData.push(td);
    });

    // Add the rowData array to the tableData array
    tableData.push(rowData);
  });

  // Return the two-dimensional array representing the table cells
  return tableData;
}

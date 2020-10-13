export const setStartEndTaskForPage = (taskAmount, page, rowsPerPage) => {
  const startTaskNumber = page * rowsPerPage + 1;
  let endTaskNumber = page * rowsPerPage + rowsPerPage;
  endTaskNumber = endTaskNumber < taskAmount ? endTaskNumber : taskAmount;
  return { startTaskNumber, endTaskNumber };
};

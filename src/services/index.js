const removeUsedColumns = (columns, filters) => {
  const remainingColumns = [];
  const { filterByNumericValues } = filters;
  filterByNumericValues
    .forEach(({ column }) => {
      if (
        columns.includes(column)) {
        remainingColumns.concat(column);
      }
    });
  return columns;
};

const order = (prev, next) => {
  const ONE = 1;
  if (Number(prev) && Number(next)) {
    return (prev - next);
  }
  return (
    prev < next ? -(ONE) : (ONE)
  );
};

export { removeUsedColumns, order };

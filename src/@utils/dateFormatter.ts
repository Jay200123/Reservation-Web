export const DateFormatter = (date: Date): string => {
  const formattedDate = `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`; //ex. 2025-10-24

  return formattedDate;
};

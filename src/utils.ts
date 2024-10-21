export function getDaysInMonth(date: Date): Date[] {
  const year = date.getFullYear();
  const month_0base = date.getMonth(); // 0 based index ( 0 to 11 represents January to December)
  const dayInMonth = new Date(year, month_0base + 1, 0).getDate(); // get the last day of this month
  return [...new Array(dayInMonth).keys()]
    .map((day) => day + 1)
    .map((day) => new Date(year, month_0base, day));
}

export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

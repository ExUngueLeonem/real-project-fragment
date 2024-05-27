//упоротая валидашка number, удовлетворяющая всем хотелкам тестеров
export const validateNumber = (count?: string | number) => {
  const max = 999_999_999
  // debugger
  if (typeof count === "string") count = count.replace(",", ".");

  if (count === "") return count;

  //если count не парсится в number
  const result = Number(count);
  if (isNaN(result)) return "";
  if (result < 0) return Math.abs(result);
  if (result > max) return max

  if (result % 1 !== 0) return parseFloat(result.toFixed(14));

  return count ?? 0;
}
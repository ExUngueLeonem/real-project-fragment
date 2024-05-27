//если строка больше, обрезаем добавляем точки
export const trimmedString = (string: string, length: number) => {
  if (string.length > length) return string.slice(0, length).concat("...");
  return string;
}
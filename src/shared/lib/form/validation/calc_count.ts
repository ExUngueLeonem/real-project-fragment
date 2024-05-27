interface ICountValidation {
  volume?: string | number,
  quantity?: string | number,
}

//пересчитываем count, при изменении коэффициента (volume)
export const calcCount = ({ volume, quantity }: ICountValidation): number => {
  //если количество в документе === 0 или не парсится в Number, принимаем quantity = 1
  if (quantity === 0 || isNaN(+(quantity ?? "NaN"))  ) quantity = 1;

  const result= +(Number(volume) * Number(quantity)).toFixed(5);
  if (isNaN(result)) return 0
  return result;
}
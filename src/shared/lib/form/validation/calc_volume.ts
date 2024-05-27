// пересчитываем коэффициент (volume), при измнении count
export const calcVolume = ({quantity, count}: {quantity: number, count: number}) => {
 //если количество в документе === 0 или не парсится в Number, принимаем quantity = 1
 if (quantity === 0 || isNaN(+(quantity ?? "NaN"))  ) quantity = 1;
 return +((count / quantity).toFixed(14))
}
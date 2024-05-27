/*Ищет источник, выводит его поле*/
export function Lookup<T, TVal>({
  value,
  source,
  keyExpr,
  valExpr,
}: {
  value: TVal;
  source: T[];
  keyExpr: keyof T;
  valExpr: keyof T;
}) {
  return <>{source.find((x) => x[keyExpr] === value)?.[valExpr]}</>;
}

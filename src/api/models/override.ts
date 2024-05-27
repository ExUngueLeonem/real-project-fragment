export enum EOverrideType {
  Unknown,                //Unknown,
  Product,         //1    //Product,         1 продукт
  Counterparty,    //2    //Counterparty,    2 контрагент
  Measure,         //3    //Measure,         3 ед. изм.
  Stock,           //4    //Stock,           4 склад
  Container        //5    //Container        5 упаковка
}

export interface IOverride {
  type: EOverrideType;
  // public enum OverrideType
  // {
  //   Unknown,
  //     Product,         1 продукт
  //     Counterparty,    2 контрагент
  //     Measure,         3 ед. изм.
  //     Stock,           4 склад
  //     Container        5 упаковка
  // }
  original: string; //sbis id
  value?: string | null; //iiko id
  count?: number | "" | null;
  volume?: number | "" | null;
  container?: string | null;
  stock?: string | null;
}
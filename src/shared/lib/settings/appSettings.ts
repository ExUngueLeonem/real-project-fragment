import { TSourceTypes } from "shared/model";

interface ISourceSetting {
  canUploadToSource: boolean;
  name: string;
}

export const appSettings = {
  source: new Map<TSourceTypes, ISourceSetting>([
    [0, { canUploadToSource: false, name: "Unknown" }],           //     Unknown,
    [1, { canUploadToSource: false, name: "Сбис" }],              //     Sbis,
    [2, { canUploadToSource: false, name: "Контур.Диадок" }],     //     Diadoc,
    [3, { canUploadToSource: false, name: "Калуга.Астрал" }],     //     Kaluga Astral,
    [512, { canUploadToSource: false, name: "ФНС" }],             //     Fns = 512,
    [1024, { canUploadToSource: true, name: "IIKO Server" }],     //     Resto = 1024,//iiko
    [2048, { canUploadToSource: false, name: "File" }],           //     File = 2048
  ])
}

export class Defaults {
  static DateFormat = "DD.MM.yyyy HH:mm:ss";
  static EntityTypes: { [key: number]: string } = {
    0: "Неизвестно",
    1: "Товар",
    2: "Контрагент",
    3: "Ед. измерения",
    4: "Склад",
    5: "Упаковка",
  };
}
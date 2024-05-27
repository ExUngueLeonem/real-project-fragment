import { IDict } from "./IDict";

export interface IDataState<T, Y> {
  list: T[]
  dict: IDict<Y>
}
//Для списка документов
import { ISource } from "entities/sources";

export interface IDocument {
  id: string;
  company: string;
  buyer?: string;
  seller?: string;
  created: Date;
  updated: Date;
  name: string;
  number: string;
  reference: string;
  source: string;
  total: number; //сумма без НДС
  sum: number; //cумма с НДС
  isMapped: boolean;
  uploads: IDocumentUploads[]
}

export interface IDocumentUploads {
  source: string;
  number: string;
  message: string;
  changed: string;
  isSuccessful: boolean;
}


export interface IFetchDocumentsCommand {
  source: ISource,
  range?: {
    from?: string, to?: string
  }
}
import { IRepository } from "./IRepository";

type AnyDatabase = any;
type AnyCollection = any;
type AnyID = any;
type AnyItem = any;

export interface IAnyDataContext extends IDataContext<AnyDatabase, AnyCollection, AnyID> { }

export interface IDataContext<Database = AnyDatabase, Collection = AnyCollection, ID = AnyID> {
  newID: () => ID;
  db: () => Promise<Database>;
  close: () => Promise<void>;
  createItem: <Item = AnyItem>(collection: string, item: Item, options?: any) => Promise<any>;
  queryByID: <Item = AnyItem>(collection: string, id: ID, options?: any) => Promise<Item> | Promise<undefined>;
  removeByID: (collection: string, id: ID, options?: any) => Promise<any>;
  toRepository: <Item = AnyItem>(collection: string, options?: any) => IRepository<Item, Collection, ID>;
  [key: string]: any;
}

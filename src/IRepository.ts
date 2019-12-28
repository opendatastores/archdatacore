type AnyItem = object;
type AnyCollection = any;
type AnyID = any;

export interface IAnyRepository extends IRepository<AnyItem> { }

export interface IRepository<Item = AnyItem, Collection = AnyCollection, ID = AnyID> {
  newID: () => ID;
  collection: () => Promise<Collection>;
  createItem: (item: Item, options?: any) => Promise<any>;
  queryByID: (id: ID, options?: any) => Promise<Item> | Promise<undefined>;
  removeByID: (id: ID, options?: any) => Promise<any>;
}

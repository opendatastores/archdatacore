import { IDataContext } from "./IDataContext";

type AnyConnectOptions = any;

export interface IDataConnect<ConnectOptions = AnyConnectOptions>  {
  connect: (options?: ConnectOptions) => IDataContext;
}

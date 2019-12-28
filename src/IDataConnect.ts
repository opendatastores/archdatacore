import { IDataContext } from "./IDataContext";

type AnyConnectOptions = any;

export type IDataConnect<ConnectOptions = AnyConnectOptions> = (options?: ConnectOptions) => IDataContext;

import { IDataConnect } from "./IDataConnect";

type AnyConnectorConfigs = any;
type AnyConnectOptions = any;

export type IDataConnector<ConnectorConfigs = AnyConnectorConfigs, ConnectOptions = AnyConnectOptions> =
  (configs: ConnectorConfigs) => IDataConnect<ConnectOptions>;

import { IDataConnect } from "./IDataConnect";

type AnyConnectorConfig = any;
type AnyConnectOption = any;

export type DataConnector<ConnectorConfig = AnyConnectorConfig, ConnectOption = AnyConnectOption> =
  (config: ConnectorConfig) => IDataConnect<ConnectOption>;

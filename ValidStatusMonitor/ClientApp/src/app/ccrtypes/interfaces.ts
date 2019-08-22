export interface CustomerAssetsData {
  Id?: string;
  CustomerId: number;
  DatabaseName?: string;
  DatabaseServer?: string;
  DatabaseResourceGroup?: string;
  ApplicationName?: string;
  ApplicationResourceGroup?;
  ApplicationLicenceId?: string;
  CustomDomainName?: string;
  EndpointTestUri: string;
  SslThumbPrint?: string;
  StorageAccountKey?: string;
  EnabledPdftron?: boolean;
  Enabled3d?: boolean;
  InstCode?: string;
  PlantName?: string;
  //Customer: Object;
}

export interface Customer {
  Id?: number;
  Name: string;
  CreatedDate?: Date;
  Email?: string;
  Description?: string;
}

export interface StatusMonitorData {
  Id: string;
  PlantName: string;
  LastUpdate: Date;
  CustomerId: number;
  Description: string;
  Environment: string;
  ApplicationName: string;
  ApplicationInfo: string;
  ApplicationVersion: string;
  LicenceExpiryDate: Date;
  LicenceServer: string;
  LicenceNumber: string;
  ApplicationServiceHealth: string;
  SslFriendlyName: string;
  SslExpiryDate: Date;
  SslStatus: string;
  StorageAccountName: string;
  StorageBlobNfiles: number;
  StorageBlobSizeMb: number;
  StorageServiceLevel: string;
  StorageServiceHealth: string;
  DatabaseName: string;
  DatabaseServer: string;
  DatabaseVersion: string;
  DatabaseTemplate: string;
  DatabaseSizeMb: number;
  DatabaseServiceLevel: string;
  DatabaseServiceHealth: string;
  EnabledPdfTron: boolean;
  PdfTronLicence: string;
  PdfTronLicenceExpiryDate: Date;
  Enabled3dViewer: boolean;
  E2eTestUri: string;
  HttpResponseE2eTest: string;
  AppResourceLink: string;
  DbResourceLink: string;
  StorageResourceLink
  AppLicenceLink: string;
  SslResourceLink: string;
  Customer: Object;
}

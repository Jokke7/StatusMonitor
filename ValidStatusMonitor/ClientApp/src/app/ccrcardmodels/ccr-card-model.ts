export interface CcrCardModel {
  Message: string;
  CcrType: CcrType;
  SeverityLevel: SeverityLevel;
  Properties: Array<any>;
}


export enum SeverityLevel {
  Informational = "INFO",
  Warning = "WARN",
  Immediate = "IMDT",
  Alert = "ALERT"
}

export enum CcrType {
  Customer = "Customer",
  Certificate = "Certificates",
  AppService = "Application",
  Database = "Database",
  Storage = "Storage",
  Misc = "Other assets"
}

export class CcrUtil {
  public static toString(ct: CcrType) {
    return CcrType[ct];
  }
}

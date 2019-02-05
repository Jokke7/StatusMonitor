export interface CcrCardModel {
  message: string;
  ccrType: CcrType;
  severityLevel: SeverityLevel;
}


export enum SeverityLevel {
  Informational,
  Warning,
  Immediate,
  Alert

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

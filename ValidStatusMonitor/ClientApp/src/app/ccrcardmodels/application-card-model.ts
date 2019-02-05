import { CcrCardModel, CcrType, SeverityLevel } from "./ccr-card-model";

export class ApplicationProps implements CcrCardModel {

  ccrType: CcrType;
  message: string;
  severityLevel: SeverityLevel;

  private applicationName: string;
  private applicationInfo: string;
  private applicationVersion: string;
  private licenceExpiryDate: Date;
  private applicationServiceHealth: string;
  private applicationServiceLevel: string;

  constructor() {
    this.ccrType = CcrType.AppService;
  }

  public get CcrType(): CcrType {
    return this.ccrType;
  }

  public get Message() {
    return this.message;
  }

  public set Message(msg) {
    this.message = msg;
  }

  public get SeverityLevel(): SeverityLevel {
    return this.severityLevel;
  }

  public set SeverityLevel(sl: SeverityLevel) {
    this.severityLevel = sl;
  }

  public get ApplicationName(): string {
    return this.applicationName;
  }

  public set ApplicationName(an: string) {
    this.applicationName = an;
  }
  public get ApplicationInfo(): string {
    return this.applicationInfo;
  }

  public set ApplicationInfo(ai: string) {
    this.applicationInfo = ai;
  }
  public get ApplicationVersion(): string {
    return this.applicationVersion;
  }

  public set ApplicationVersion(av: string) {
    this.applicationVersion = av;
  }
  public get LicenceExpiryDate(): Date {
    return this.licenceExpiryDate;
  }

  public set LicenceExpiryDate(led: Date) {
    this.licenceExpiryDate = led;
  }
  public get ApplicationServiceHealth(): string {
    return this.applicationServiceHealth;
  }

  public set ApplicationServiceHealth(ash: string) {
    this.applicationServiceHealth = ash;
  }
  public get DatabaseServiceLevel(): string {
    return this.applicationServiceLevel;
  }

  public set ApplicationServiceLevel(asl: string) {
    this.applicationServiceLevel = asl;
  }

}


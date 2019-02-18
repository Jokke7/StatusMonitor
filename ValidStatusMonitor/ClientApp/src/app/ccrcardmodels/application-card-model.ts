import { CcrCardModel, CcrType, SeverityLevel } from "./ccr-card-model";

export class ApplicationProps implements CcrCardModel {

  private _ccrType: CcrType;
  private _message: string;
  private _severityLevel: SeverityLevel;
  private _properties: Array<any>;

  private _applicationName: string;
  private _applicationInfo: string;
  private _applicationVersion: string;
  private _licenceExpiryDate: Date;
  private _applicationServiceHealth: string;
  private _applicationServiceLevel: string;

  constructor() {
    this._ccrType = CcrType.AppService;
  }

  public get CcrType(): CcrType {
    return this._ccrType;
  }

  public set CcrType(ct: CcrType) {
    this._ccrType = ct;
  }

  public get Message(): string {
    return this._message;
  }

  public set Message(msg: string) {
    this._message = msg;
  }

  public get SeverityLevel(): SeverityLevel {
    return this._severityLevel;
  }

  public set SeverityLevel(sl: SeverityLevel) {
    this._severityLevel = sl;
  }

  public get ApplicationName(): string {
    return this._applicationName;
  }

  public set ApplicationName(an: string) {
    this._properties.push(an);
    this._applicationName = an;
  }
  public get ApplicationInfo(): string {
    return this._applicationInfo;
  }

  public set ApplicationInfo(ai: string) {
    this._properties.push(ai);
    this._applicationInfo = ai;
  }
  public get ApplicationVersion(): string {
    return this._applicationVersion;
  }

  public set ApplicationVersion(av: string) {
    this._properties.push(av);
    this._properties.push(av);

    this._applicationVersion = av;
  }
  public get LicenceExpiryDate(): Date {
    return this._licenceExpiryDate;
  }

  public set LicenceExpiryDate(led: Date) {
    this._properties.push(led);
    this._licenceExpiryDate = led;
  }
  public get ApplicationServiceHealth(): string {
    return this._applicationServiceHealth;
  }

  public set ApplicationServiceHealth(ash: string) {
    this._properties.push(ash);
    this._applicationServiceHealth = ash;
  }
  public get ApplicationServiceLevel(): string {
    return this._applicationServiceLevel;
  }

  public set ApplicationServiceLevel(asl: string) {
    this._applicationServiceLevel = asl;
  }

  public get Properties(): Array<any> {
    
    return this._properties;
  }
}


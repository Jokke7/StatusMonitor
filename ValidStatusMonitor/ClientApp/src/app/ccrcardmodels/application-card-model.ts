import { CcrCardModel, CcrType, SeverityLevel } from "./ccr-card-model";

export class ApplicationProps implements CcrCardModel {

  private _ccrType: CcrType;
  private _message: string;
  private _severityLevel: SeverityLevel;
  private _showCard: boolean; 

  private _applicationName: string;
  private _applicationInfo: string;
  private _applicationVersion: string;
  private _licenceExpiryDate: Date;
  private _licenceSerial: string;
  private _licenceServer: string;
  private _applicationServiceHealth: string;
  private _applicationServiceLevel: string;
  private _e2eTestResponse: string;
  private _resourceLink: string;
  private _licenceLink: string;

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

  public get ShowCard(): boolean {
    return this._showCard;
  }

  public set ShowCard(sc: boolean) {
    this._showCard = sc;
  }

  public get ApplicationName(): string {
    return this._applicationName;
  }

  public set ApplicationName(an: string) {
    this._applicationName = an;
  }
  public get ApplicationInfo(): string {
    return this._applicationInfo;
  }

  public set ApplicationInfo(ai: string) {
    this._applicationInfo = ai;
  }
  public get ApplicationVersion(): string {
    return this._applicationVersion;
  }

  public set ApplicationVersion(av: string) {
    this._applicationVersion = av;
  }
  public get LicenceExpiryDate(): Date {
    return this._licenceExpiryDate;
  }

  public set LicenceExpiryDate(led: Date) {
    this._licenceExpiryDate = led;
  }

  public get LicenceServer(): string {
    return this._licenceServer;
  }

  public set LicenceServer(ls: string) {
    this._licenceServer = ls;
  }

  public get LicenceSerial(): string {
    return this._licenceSerial;
  }

  public set LicenceSerial(ls: string) {
    this._licenceSerial = ls;
  }

  public get ApplicationServiceHealth(): string {
    return this._applicationServiceHealth;
  }

  public set ApplicationServiceHealth(ash: string) {
    this._applicationServiceHealth = ash;
  }
  public get ApplicationServiceLevel(): string {
    return this._applicationServiceLevel;
  }

  public set ApplicationServiceLevel(asl: string) {
    this._applicationServiceLevel = asl;
  }

  public set E2eTestResponse(res: string) {
    this._e2eTestResponse = res;
  }

  public get E2eTestResponse(): string {
    return this._e2eTestResponse;
  }

  public set ResourceLink(res: string) {
    this._resourceLink = res;
  }

  public get ResourceLink(): string {
    return this._resourceLink;
  }

  public set LicenceLink(res: string) {
    this._licenceLink = res;
  }

  public get LicenceLink(): string {
    return this._licenceLink;
  }

}


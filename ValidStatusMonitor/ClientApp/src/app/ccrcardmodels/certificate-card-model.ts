import { CcrCardModel, CcrType, SeverityLevel } from "./ccr-card-model";

export class CertificateProps implements CcrCardModel {

  private _ccrType: CcrType;
  private _message: string;
  private _severityLevel: SeverityLevel;
  private _properties: Array<any>;


  private _sslName: string;
  private _sslExpiryDate: Date;
  private _sslStatus: string;

  constructor() {
    this._ccrType = CcrType.Certificate;
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

  public set SslName(sn: string) {
    this._sslName = sn;
  }
  public get SslName(): string {
    return this._sslName;
  }

  public set SslExpiryDate(sed: Date) {
    this._sslExpiryDate = sed;
  }
  public get SslExpiryDate(): Date {
    return this._sslExpiryDate;
  }

  public set SslStatus(ss: string) {
    this._sslStatus = ss;
  }
  public get SslStatus(): string {
    return this._sslStatus;
  }
  public get Properties(): Array<any> {
    var allProps: Array<any> = new Array<any>();
    allProps.push(this._sslName);
    allProps.push(this._sslExpiryDate);
    allProps.push(this._sslStatus);

    return allProps;
  }
}


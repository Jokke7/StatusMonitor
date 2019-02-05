import { CcrCardModel, CcrType, SeverityLevel } from "./ccr-card-model";

export class CertificateProps implements CcrCardModel {

  ccrType: CcrType;
  message: string;
  severityLevel: SeverityLevel;

  private sslName: string;
  private sslExpiryDate: Date;
  private sslStatus: string;

  constructor() {
    this.ccrType = CcrType.Certificate;
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

  public set SslName(sn: string) {
    this.sslName = sn;
  }
  public get SslName(): string {
    return this.sslName;
  }

  public set SslExpiryDate(sed: Date) {
    this.sslExpiryDate = sed;
  }
  public get SslExpiryDate(): Date {
    return this.sslExpiryDate;
  }

  public set SslStatus(ss: string) {
    this.sslStatus = ss;
  }
  public get SslStatus(): string {
    return this.sslStatus;
  }
}


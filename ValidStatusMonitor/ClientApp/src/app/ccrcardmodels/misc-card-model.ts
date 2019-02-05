import { CcrCardModel, CcrType, SeverityLevel } from "./ccr-card-model";

export class MiscProps implements CcrCardModel {

  ccrType: CcrType;
  message: string;
  severityLevel: SeverityLevel;

  //private sslName: string;
  //private sslExpiryDate: Date;
  //private sslStatus: string;

  constructor() {
    this.ccrType = CcrType.Misc;
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

}

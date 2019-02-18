import { CcrCardModel, CcrType, SeverityLevel } from "./ccr-card-model";

export class MiscProps implements CcrCardModel {

  private _ccrType: CcrType;
  private _message: string;
  private _severityLevel: SeverityLevel;
  private _properties: Array<any>;

  private _enabledPdfTron: boolean;
  private _enabled3dViewer: boolean;

 

  constructor() {
    this._ccrType = CcrType.Misc;
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

  public set EnabledPdfTron(en: boolean) {
    this._enabledPdfTron = en;
  }

  public get EnabledPdfTron(): boolean {
    return this._enabledPdfTron;
  }

  public set Enabled3dViewer(en: boolean) {
    this._enabled3dViewer = en;
  }

  public get Enabled3dViewer(): boolean {
    return this._enabled3dViewer;
  }


  public get Properties(): Array<any> {
    var allProps: Array<any> = new Array<any>();
    //allProps.push(this.someProperty);
    return allProps;
  }

}

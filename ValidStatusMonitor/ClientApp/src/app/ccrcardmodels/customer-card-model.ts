import { CcrCardModel, CcrType, SeverityLevel } from "./ccr-card-model";

export class CustomerProps implements CcrCardModel {

  private _ccrType: CcrType;
  private _message: string;
  private _severityLevel: SeverityLevel;
  private _properties: Array<any>;

  private _plantName: string;
  private _lastUpdate: Date;
  private _licenceExpiry: Date;
  private _customerId: number;
  private _description: string;
  private _environment: string;

  constructor() {
    this._ccrType = CcrType.Customer;
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

  public set PlantName(pn: string) {
    this._plantName = pn;
  }
  public get PlantName(): string {
    return this._plantName;
  }

  public set LastUpdate(lu: Date) {
    this._lastUpdate = lu;
  }
  public get LastUpdate(): Date {
    return this._lastUpdate;
  }

  public set CustomerId(ci: number) {
    this._customerId = ci;
  }
  public get CustomerId(): number {
    return this._customerId;
  }

  public set Description(d: string) {
    this._description = d;
  }
  public get Description(): string {
    return this._description;
  }

  public set Environment(env: string) {
    this._environment = env;
  }
  public get Environment(): string {
    return this._environment;
  }

  public set LicenceExpiryDate(le: Date) {
    this._licenceExpiry = le;
  }

  public get LicenceExpiryDate(): Date {
    return this._licenceExpiry;

  }
  public get Properties(): Array<any> {
    var allProps: Array<any> = new Array<any>();
    allProps.push(this._plantName);
    allProps.push(this._lastUpdate);
    allProps.push(this._customerId);
    allProps.push(this._description);
    allProps.push(this._environment);
    allProps.push(this._licenceExpiry);
    return allProps;
  }
}


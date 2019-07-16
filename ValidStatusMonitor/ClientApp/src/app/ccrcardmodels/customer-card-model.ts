import { CcrCardModel, CcrType, SeverityLevel } from "./ccr-card-model";

export class CustomerProps implements CcrCardModel {

  private _ccrType: CcrType;
  private _message: string;
  private _severityLevel: SeverityLevel;
  private _showCard: boolean;

  private _statusId: string;
  private _appLink: string;
  private _plantName: string;
  private _name: string;
  private _lastUpdate: Date;
  private _licenceExpiry: Date;
  private _customerId: number;
  private _description: string;
  private _environment: string;
  private _e2eTestUri: string;
  private _blackOut: boolean;

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
  public get ShowCard(): boolean {
    return this._showCard;
  }

  public set ShowCard(sc: boolean) {
    this._showCard = sc;
  }

  public set StatusId(sid: string) {
    this._statusId = sid;
  }
  public get StatusId(): string {
    return this._statusId;
  }

  public set AppLink(pn: string) {
    this._appLink = pn;
  }
  public get AppLink(): string {
    return this._appLink;
  }

  public set Name(pn: string) {
    this._name = pn;
  }
  public get Name(): string {
    return this._name;
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

  public set E2eTestUri(env: string) {
    this._e2eTestUri = env;
  }
  public get E2eTestUri(): string {
    return this._e2eTestUri;
  }

  public set BlackOut(bo: boolean) {
    this._blackOut = bo;
  }
  public get BlackOut(): boolean {
    return this._blackOut;
  }
}


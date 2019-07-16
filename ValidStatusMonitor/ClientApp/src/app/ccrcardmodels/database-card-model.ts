import { CcrCardModel, CcrType, SeverityLevel} from "./ccr-card-model";

export class DatabaseProps implements CcrCardModel {

  private _ccrType: CcrType;
  private _message: string;
  private _severityLevel: SeverityLevel;
  private _showCard: boolean;

  private _databaseName?: string;
  private _databaseServer?: string;
  private _databaseVersion?: string;
  private _databaseTemplate?: string;
  private _databaseSize?: number;
  private _databaseServiceLevel?: string;
  private _resourceLink?: string;

  constructor() {
    this._ccrType = CcrType.Database;
  }

  public get CcrType(): CcrType {
    return this._ccrType;
  }

  public set CcrType(ct: CcrType) {
    this._ccrType = ct;
  }

  public get SeverityLevel(): SeverityLevel {
    return this._severityLevel;
  }

  public get Message(): string {
    return this._message;
  }

  public set Message(msg: string) {
    this._message = msg;
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

  public get DatabaseName(): string {
    return this._databaseName;
  }

  public set DatabaseName(dbn: string) {
    this._databaseName = dbn;
  }
  public get DatabaseServer(): string {
    return this._databaseServer;
  }

  public set DatabaseServer(dbs: string) {
    this._databaseServer = dbs;
  }
  public get DatabaseVersion(): string {
    return this._databaseVersion;
  }

  public set DatabaseVersion(dbv: string) {
    this._databaseVersion = dbv;
  }
  public get DatabaseTemplate(): string {
    return this._databaseTemplate;
  }

  public set DatabaseTemplate(dbt: string) {
    this._databaseTemplate = dbt;
  }
  public get DatabaseSize(): number {
    return this._databaseSize;
  }

  public set DatabaseSize(dbs: number) {
    this._databaseSize = dbs;
  }
  public get DatabaseServiceLevel(): string {
    return this._databaseServiceLevel;
  }

  public set DatabaseServiceLevel(dbl: string) {
    this._databaseServiceLevel = dbl;
  }

  public set ResourceLink(res: string) {
    this._resourceLink = res;
  }

  public get ResourceLink(): string {
    return this._resourceLink;
  }
}

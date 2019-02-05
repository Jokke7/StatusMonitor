import { CcrCardModel, CcrType, SeverityLevel} from "./ccr-card-model";

export class DatabaseProps implements CcrCardModel {

  ccrType: CcrType;
  message: string;
  severityLevel: SeverityLevel;

  private databaseName?: string;
  private databaseServer?: string;
  private databaseVersion?: string;
  private databaseTemplate?: string;
  private databaseSize?: number;
  private databaseServiceLevel?: string;

  constructor() {
    this.ccrType = CcrType.Database;
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

  public get DatabaseName(): string {
    return this.databaseName;
  }

  public set DatabaseName(dbn: string) {
    this.databaseName = dbn;
  }
  public get DatabaseServer(): string {
    return this.databaseServer;
  }

  public set DatabaseServer(dbs: string) {
    this.databaseServer = dbs;
  }
  public get DatabaseVersion(): string {
    return this.databaseVersion;
  }

  public set DatabaseVersion(dbv: string) {
    this.databaseVersion = dbv;
  }
  public get DatabaseTemplate(): string {
    return this.databaseTemplate;
  }

  public set DatabaseTemplate(dbt: string) {
    this.databaseTemplate = dbt;
  }
  public get DatabaseSize(): number {
    return this.databaseSize;
  }

  public set DatabaseSize(dbs: number) {
    this.databaseSize = dbs;
  }
  public get DatabaseServiceLevel(): string {
    return this.databaseServiceLevel;
  }

  public set DatabaseServiceLevel(dbl: string) {
    this.databaseServiceLevel = dbl;
  }

}

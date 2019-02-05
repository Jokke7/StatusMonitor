import { CcrCardModel, CcrType, SeverityLevel } from "./ccr-card-model";

export class CustomerProps implements CcrCardModel {

  ccrType: CcrType;
  message: string;
  severityLevel: SeverityLevel;

  private plantName: string;
  private lastUpdate: Date;
  private customerId: number;
  private description: string;
  private environment: string;

  constructor() {
    this.ccrType = CcrType.Customer;
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

  public set PlantName(pn: string) {
    this.plantName = pn;
  }
  public get PlantName(): string {
    return this.plantName;
  }

  public set LastUpdate(lu: Date) {
    this.lastUpdate = lu;
  }
  public get LastUpdate(): Date {
    return this.lastUpdate;
  }

  public set CustomerId(ci: number) {
    this.customerId = ci;
  }
  public get CustomerId(): number {
    return this.customerId;
  }

  public set Description(d: string) {
    this.description = d;
  }
  public get Description(): string {
    return this.description;
  }

  public set Environment(env: string) {
    this.environment = env;
  }
  public get Environment(): string {
    return this.environment;
  }
}


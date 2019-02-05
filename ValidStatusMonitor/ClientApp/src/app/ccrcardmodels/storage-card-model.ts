import { CcrCardModel, CcrType, SeverityLevel } from "./ccr-card-model";

export class StorageProps implements CcrCardModel {

  ccrType: CcrType;
  message: string;
  severityLevel: SeverityLevel;

  private storageBlobNFiles: number;
  private storageBlobSizeMb: number;
  private storageServiceLevel: string 
  private storageServiceHealth: string;

  constructor() {
    this.ccrType = CcrType.Storage;

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

  public set StorageBlobNFiles(sbnf: number) {
    this.storageBlobNFiles = sbnf;
  }
  public get StorageBlobNFiles(): number {
    return this.storageBlobNFiles;
  }
  public set StorageBlobSizeMb(sbsm: number) {
    this.storageBlobSizeMb = sbsm;
  }
  public get StorageBlobSizeMb(): number {
    return this.storageBlobSizeMb;
  }
  public set StorageServiceLevel(ssl: string) {
    this.storageServiceLevel = ssl;
  }
  public get StorageServiceLevel(): string {
    return this.storageServiceLevel;
  }
  public set StorageServiceHealth(ssh: string) {
    this.storageServiceHealth = ssh;
  }
  public get StorageServiceHealth(): string {
    return this.storageServiceHealth;
  }
}

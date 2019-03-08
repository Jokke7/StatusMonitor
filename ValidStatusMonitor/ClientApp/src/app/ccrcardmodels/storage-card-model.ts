import { CcrCardModel, CcrType, SeverityLevel } from "./ccr-card-model";

export class StorageProps implements CcrCardModel {

  private _ccrType: CcrType;
  private _message: string;
  private _severityLevel: SeverityLevel;
  private _showCard: boolean;

  private _storageBlobNFiles: number;
  private _storageBlobSizeMb: number;
  private _storageServiceLevel: string 
  private _storageServiceHealth: string;

  constructor() {
    this._ccrType = CcrType.Storage;
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

  public set SeverityLevel(sl: SeverityLevel) {
    this._severityLevel = sl;
  }

  public get ShowCard(): boolean {
    return this._showCard;
  }

  public set ShowCard(sc: boolean) {
    this._showCard = sc;
  }

  public get Message(): string {
    return this._message;
  }

  public set Message(msg: string) {
    this._message = msg;
  }

  public set StorageBlobNFiles(sbnf: number) {
    this._storageBlobNFiles = sbnf;
  }
  public get StorageBlobNFiles(): number {
    return this._storageBlobNFiles;
  }
  public set StorageBlobSizeMb(sbsm: number) {
    this._storageBlobSizeMb = sbsm;
  }
  public get StorageBlobSizeMb(): number {
    return this._storageBlobSizeMb;
  }
  public set StorageServiceLevel(ssl: string) {
    this._storageServiceLevel = ssl;
  }
  public get StorageServiceLevel(): string {
    return this._storageServiceLevel;
  }
  public set StorageServiceHealth(ssh: string) {
    this._storageServiceHealth = ssh;
  }
  public get StorageServiceHealth(): string {
    return this._storageServiceHealth;
  }
}

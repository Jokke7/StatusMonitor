import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { CcrCardModel, CcrType, SeverityLevel, CcrUtil } from '../ccrcardmodels/ccr-card-model';
import { DatabaseProps } from '../ccrcardmodels/database-card-model';
import { ApplicationProps } from '../ccrcardmodels/application-card-model';
import { CertificateProps } from '../ccrcardmodels/certificate-card-model';
import { CustomerProps } from '../ccrcardmodels/customer-card-model';
import { StorageProps } from '../ccrcardmodels/storage-card-model';
import { MiscProps } from '../ccrcardmodels/misc-card-model';


@Component({
  selector: 'app-ccr-card',
  templateUrl: './ccr-card.component.html',
  styleUrls: ['./ccr-card.component.css']
})
export class CcrCardComponent implements OnInit {
  public severityLevel: SeverityLevel;
  public ccrType: CcrType;
  @Input() ccr: CcrCardModel;
  public fieldIconUri: string;
  contentViewLimit: number;
  

  static readonly fieldIconPath : string = "../../assets/icons/"

  constructor() {
    this.fieldIconUri = "";
    this.contentViewLimit = 20;
  }

  @HostBinding('class.warning') sl: boolean = false;
  //@HostBinding('class.collapse') collapse: boolean = false;

  ngOnInit() {
    this.ccrType = this.ccr.ccrType;
    this.sl = true;
    //this.collapse = true;
    this.setCcrField();
    //console.log("fieldicon " + this.fieldIconUri);
    //this.fieldText = CcrUtil.toString(this.ccr.ccrType);

  }

  setFieldStyle()
  {
    return {
      field: true,
      warning: this.severityLevel == SeverityLevel.Warning,
      immediate: this.severityLevel == SeverityLevel.Immediate,
      alert1: this.severityLevel == SeverityLevel.Alert
    }
  }


  private setCcrField() {
    var path = CcrCardComponent.fieldIconPath;
    var file = "ssl.svg"
    switch (this.ccrType) {
      case CcrType.AppService:
        file = "web-app.svg";
        this.severityLevel = SeverityLevel.Warning;
        break;
      case CcrType.Certificate:
        file = "ssl.svg";
        break;
      case CcrType.Customer:
        file = "customer.svg";
        break;
      case CcrType.Storage:
        file = "storage.svg";
        this.severityLevel = SeverityLevel.Alert;
        break;
      case CcrType.Database:
        file = "database.svg"
        break;
      default:
        file = "other-assets.svg";
        this.severityLevel = SeverityLevel.Immediate;
        break;
    }
    this.fieldIconUri = path.concat(file);
  }


  
}

import { Component } from '@angular/core';
import { StatusMonitorService } from '../services/statusmonitor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  updateRes: any;
  showProgress: boolean;

  constructor(private _statusMonitorService: StatusMonitorService) {
    this.updateRes = null;
    this.showProgress = false;
  }

  addAsset() { }

  updateAsset(assetId: string = "All") {
    this.showProgress = true;
    this._statusMonitorService.updateStatusOnDemand(assetId)
      .subscribe((data: any) => {
        this.updateRes = data;
      })
    setTimeout(() => {
      this.resetProgress();
    }, 120000);
  }

  //Todo - this should reset when the actual job is done. 
  resetProgress(){
    this.showProgress = false;
  }
  //scrollToElement($element): void {
  //  console.log($element);
  //  $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  //}
}

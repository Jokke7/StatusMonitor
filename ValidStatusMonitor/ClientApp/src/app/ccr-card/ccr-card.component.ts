import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ccr-card',
  templateUrl: './ccr-card.component.html',
  styleUrls: ['./ccr-card.component.css']
})
export class CcrCardComponent implements OnInit {
  public severityLevel: string;

  //var svgBaseUrl = "../../assets"

  constructor() {
    var fieldIconPath = "../../assets/icons"
    this.severityLevel = "ALERT"
  }

  ngOnInit() { }

  getNotificationColor(severityLevel) : string {
    switch (severityLevel) {
      case 'INFORMATIONAL':
        return 'green';
      case 'WARNING':
        return 'yellow';
      case 'ALERT':
        return 'red';
    }
  }



}

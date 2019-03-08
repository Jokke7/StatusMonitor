import { Component, OnInit, Input } from '@angular/core';
import { SeverityLevel } from '../ccrcardmodels/ccr-card-model';
import { Util } from '../helpers/util';

@Component({
  selector: 'app-msgboard',
  templateUrl: './msgboard.component.html',
  styleUrls: ['./msgboard.component.css']
})
export class MsgboardComponent implements OnInit {

    @Input() msgSl: SeverityLevel;
    @Input() msgs: string[];

  constructor() {
    this.msgs = undefined;
    }

  
    ngOnInit() {
        this.setBoardStyle();
    }

    setBoardStyle() {
      return {
          msg: true,
          warning: this.msgSl === SeverityLevel.Warning,
          immediate: this.msgSl === SeverityLevel.Immediate,
          alert1: this.msgSl === SeverityLevel.Alert,
          hide: (this.msgs === undefined || this.msgs.length == 0)
        }
    }

}

import { Util } from "./util";

export class Formatter {

  static toolTipNotification(msgs: string[]): string {
    if (Util.empty(msgs)) { return ""; }
    var formatted = `<ul style="padding-left:0px">`;
    for (let msg of msgs) {
      formatted += `<li>${msg.toString()}</li>`;
    }
    formatted += `</ul>`;
    return formatted;
  }

}

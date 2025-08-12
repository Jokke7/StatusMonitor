import { CcrCardModel, CcrType, SeverityLevel } from '../ccrcardmodels/ccr-card-model';
import { DatabaseProps } from '../ccrcardmodels/database-card-model';
import { ApplicationProps } from '../ccrcardmodels/application-card-model';
import { CertificateProps } from '../ccrcardmodels/certificate-card-model';
import { StorageProps } from '../ccrcardmodels/storage-card-model';
import { CustomerProps } from '../ccrcardmodels/customer-card-model';

export class Util {

  static empty(data) {
    if (typeof (data) == 'number' || typeof (data) == 'boolean') {
      return false;
    }
    if (typeof (data) == 'undefined' || data === null) {
      return true;
    }
    if (typeof (data.length) != 'undefined') {
      return data.length == 0;
    }
    var count = 0;
    for (var i in data) {
      if (data.hasOwnProperty(i)) {
        count++;
      }
    }
    return count == 0;
  }

  static DaysFromNow(date: Date): number {
    return Math.ceil((date.getTime() - (new Date()).getTime()) / (1000 * 3600 * 24));
  }
}

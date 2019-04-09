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

  static DaysBetween(date1: Date, date2: Date): number {
    var diff = Math.abs(date1.getTime() - date2.getTime());
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays;
  }

  static AzureRmLink(card: CcrCardModel ): string {
    var empty = "";
    if (card.CcrType == CcrType.AppService) {
      var applicationCard = card as ApplicationProps;
      if (applicationCard.ApplicationName == 'okea-vnvalid') {
        return "https://portal.azure.com/#@Visionova.no/resource/subscriptions/181ed219-c44b-4fc0-a147-ca89ea5a60fd/resourceGroups/ValidProdApps/providers/Microsoft.Web/sites/okea-vnvalid/appServices";
      }
      if (applicationCard.ApplicationName == 'okea-vnvalid/test') {
        return "https://portal.azure.com/#@Visionova.no/resource/subscriptions/181ed219-c44b-4fc0-a147-ca89ea5a60fd/resourceGroups/ValidProdApps/providers/Microsoft.Web/sites/okea-vnvalid/slots/test/appServices";
      }
      if (applicationCard.ApplicationName == 'valid-core-dev') {
        return "https://portal.azure.com/#@Visionova.no/resource/subscriptions/181ed219-c44b-4fc0-a147-ca89ea5a60fd/resourceGroups/VN-APPSERVICE-DEV/providers/Microsoft.Web/sites/valid-core-dev/appServices";
      }
      if (applicationCard.ApplicationName == 'valid-core-test') {
        return "https://portal.azure.com/#@Visionova.no/resource/subscriptions/181ed219-c44b-4fc0-a147-ca89ea5a60fd/resourceGroups/VN-APPSERVICE-DEV/providers/Microsoft.Web/sites/valid-core-test/appServices";
      }
      return empty;
    }

    if (card.CcrType == CcrType.Database) {
      var databaseCard = card as DatabaseProps;
      if (databaseCard.DatabaseName == 'OkeaDra') {
        return "https://portal.azure.com/#@Visionova.no/resource/subscriptions/181ed219-c44b-4fc0-a147-ca89ea5a60fd/resourceGroups/VisioNovaProdDatabase/providers/Microsoft.Sql/servers/valid-prod/databases/OkeaDra/overview"
      }
    }
    return empty;
  }

}

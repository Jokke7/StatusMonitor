using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using ValidStatusMonitor.DataModel;

namespace ValidStatusMonitor.CcrTypes
{

    public enum SeverityLevel
    {
        Informational,
        Warning,
        Alert

    }

    public enum CcrType
    {
        Customer, 
        Certificate,
        AppService,
        Database,
        Storage,
        Misc
    }

    public interface ICcr
    {
        SeverityLevel Severity { get; set; }

        String Message { get; set; }
    }

    static class CcrHelper {
        static SeverityLevel UpdateSeverity(DscReference refer, CcrType ccr, ICcr ccrObj)
        {
            string[] fields;
            SeverityLevel severity;
            switch (ccr)
            {
                case CcrType.Customer:
                    fields = new[] {
                        GetPropertyName(() => refer.Environment)
                    };
                    break;
                case CcrType.Certificate:
                    fields = new[] {
                        GetPropertyName(() => refer.DscSslExpiryDate)
                    };
                    break;
                case CcrType.AppService:
                    fields = new[] {
                        GetPropertyName(() => refer.DscAppEnvironment),
                        GetPropertyName(() => refer.DscAppLicenceExpiryDate),
                        GetPropertyName(() => refer.DscAppVersion)
                    };
                    break;
                case CcrType.Database:
                    fields = new[] {
                        GetPropertyName(() => refer.DscDbServerEnvironment),
                        GetPropertyName(() => refer.DscDbMinServiceLevel),
                        GetPropertyName(() => refer.DscDbVersion),
                        GetPropertyName(() => refer.DscDbMaxSettingDtu),
                        GetPropertyName(() => refer.DscDbMaxSettingSizeMb)
                    };
                    break;
                case CcrType.Storage:
                    fields = new[] {
                        GetPropertyName(() => refer.DscMinStorageServiceLevel),
                        GetPropertyName(() => refer.DscMaxStorageBlobSizeMb)
                    };
                    break;
                case CcrType.Misc:
                    fields = new[] { "DscPdfTronUp", "Dsc3DViewerUp" };
                    break;
                default:
                    return SeverityLevel.Informational;
            }
            fields.ToArray();


            return SeverityLevel.Informational;
        }

        static string GetPropertyName<T>(Expression<Func<T>> propertyLambda)
        {
            Debug.Assert(propertyLambda.Body != null,
                "Please provide a lambda expression like 'n => n.PropertyName'");

            if (!(propertyLambda.Body is MemberExpression prop))
            {
                throw new ArgumentException("You must pass a lambda of the form: '() => Class.Property' or '() => object.Property'");
            }

            return prop.Member.Name;
        }
    }
}

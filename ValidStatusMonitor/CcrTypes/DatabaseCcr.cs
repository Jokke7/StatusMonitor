using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ValidStatusMonitor.CcrTypes
{
    public class DatabaseCcr : ICcr
    {
        private SeverityLevel severity = SeverityLevel.Informational;
        private string _message;
        private string Environment { get; set; }
        private string ServiceLevel { get; set; }
        private string Version { get; set; }
        private int MaxDtu { get; set; }
        private int MaxSizeMb { get; set; }

        public SeverityLevel Severity
        {
            get => severity;
            set
            {
                this.severity = value;
            }
        }

        public string Message { get => _message; set => _message = value; }
    }

    //DscDbServerEnvironment),
    //DscDbMinServiceLevel),
    //DscDbVersion),
    //DscDbMaxSettingDtu),
    //DscDbMaxSettingSizeMb)
}

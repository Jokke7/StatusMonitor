using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ValidStatusMonitor.CcrTypes
{
    public class AppServiceCcr : ICcr
    {
        private SeverityLevel severity = SeverityLevel.Informational;
        public SeverityLevel Severity
        {
            get => severity;
            set
            {
                this.severity = value;
            }
        }

        public string Message { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    }
}

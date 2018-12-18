using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ValidStatusMonitor.Security
{
    public class VnUserProfile
    {
        public string UserPrincipalName { get; set; }
        public string ObjectId { get; set; }
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public string GivenName { get; set; }
        public string Surname { get; set; }
        public string DebugInformation { get; set; }
        public string ADGroups { get; set; }

        public VnUserProfile()
        {
            UserPrincipalName = ObjectId = Name = DisplayName = GivenName = Surname = "";
        }
    }
}

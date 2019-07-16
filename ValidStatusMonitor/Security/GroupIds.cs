using Newtonsoft.Json;
using System.Collections.Generic;

namespace ValidStatusMonitor.Security
{
    public class ADGroups
    {
        [JsonProperty]
        private List<string> value;
        public List<string> FromValue => value;
        public List<string> GroupIds { get; set; }

    }
}

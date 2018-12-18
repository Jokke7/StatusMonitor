using Newtonsoft.Json;

namespace ValidStatusMonitor.Security
{
    public class AzureAdTokenResponse
    {
        [JsonProperty]
        private string token_type;
        [JsonProperty]
        private string scope;
        [JsonProperty]
        private string resource;
        [JsonProperty]
        private string access_token;
        [JsonProperty]
        private string refresh_token;
        [JsonProperty]
        private int expires_in;
        [JsonProperty]
        private int ext_expires_in;
        [JsonProperty]
        private int expires_on;
        [JsonProperty]
        private int not_before;

        public string TokenType => token_type;
        public string Scope => scope;
        public string Resource => resource;
        public string AccessToken => access_token;
        public string RefreshToken => refresh_token;
        public int ExpiresIn => expires_in;
        public int ExtExpiresIn => ext_expires_in;
        public int ExpiresOn => expires_on;
        public int NotBefore => not_before;
    }
}

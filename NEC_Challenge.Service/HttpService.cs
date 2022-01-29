using NEC_Challenge.Core.Interfaces;
using Newtonsoft.Json;
using RestSharp;

namespace NEC_Challenge.Service
{
    public class HttpService : IHttpService
    {
        public async Task<T> Get<T>(string baseUrl, string endPointUrl, Dictionary<string, string> headers, Dictionary<string, string> sParams)
        {
            var client = new RestClient(baseUrl);
            var request = new RestRequest(endPointUrl, Method.Get);
            AddHeaders(request, headers);
            AddParameters(request, sParams);
            var queryResult = await client.ExecuteAsync(request);
            if (!queryResult.IsSuccessful)
                throw new NEC_Challenge.Core.Exceptions.HttpRequestException("Error en la comunicación con CoinMarketCap: " + queryResult.ErrorException.Message);
            return JsonConvert.DeserializeObject<T>(queryResult.Content);
        }

        #region Private Methods
        private RestRequest AddHeaders(RestRequest req, Dictionary<string, string> headers)
        {
            if (headers != null)
            {
                foreach (KeyValuePair<string, string> header in headers)
                    req.AddHeader(header.Key, header.Value);
            }
            return req;
        }
        private RestRequest AddParameters(RestRequest req, Dictionary<string, string> sParams)
        {
            if (sParams != null)
            {
                foreach (KeyValuePair<string, string> param in sParams)
                    req.AddParameter(param.Key, param.Value);
            }
            return req;
        }
        #endregion
    }
}

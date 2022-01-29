using Microsoft.Extensions.Configuration;
using NEC_Challenge.Core.Interfaces;
using NEC_Challenge.Core.Models;

namespace NEC_Challenge.Service
{
    public class CryptoCurrencyService : ICryptoCurrencyService
    {
        private readonly IConfiguration Config;
        private readonly IHttpService HttpService;
        private string ApiKeyName;
        private string ApiKey;
        private string ApiUrl;
        private string CryptoCurrencyUrl;
        private string ConversionUrl;
        private List<string> CoinsId = new();

        public CryptoCurrencyService(
            IConfiguration config,
            IHttpService httpService
            )
        {
            Config = config;
            HttpService = httpService;
            ApiKeyName = Config["CoinMarketCap:ApiKeyName"];
            ApiKey = Config["CoinMarketCap:ApiKey"];
            ApiUrl = Config["CoinMarketCap:ApiUrl"];
            CryptoCurrencyUrl = Config["CoinMarketCap:CryptoCurrencyUrl"];
            ConversionUrl = Config["CoinMarketCap:ConversionUrl"];
            var valuesSection = Config.GetSection("CoinMarketCap:CryptoCurrencyIds");
            foreach (IConfigurationSection section in valuesSection.GetChildren())
                CoinsId.Add(section.Value);
        }

        public async Task<List<CryptoCurrency>> GetCoins()
        {
            var headers = new Dictionary<string, string>{ { ApiKeyName, ApiKey } };
            var parameters = new Dictionary<string, string>{ { "id", string.Join(",", CoinsId) } };
            var cryptosCoins = await HttpService.Get<CryptoCurrencyResponse>(ApiUrl, CryptoCurrencyUrl, headers, parameters);
            return MapCoins(cryptosCoins);
        }
        public async Task<CryptoCurrencyConversion> GetConversions(CryptoCurrency coin)
        {
            var coinConversion = new CryptoCurrencyConversion();
            /* CoinMarketCap solo permite una conversion de moneda por cada llamada en el plan gratuito,
             * con algun plan de pago podría obtener varias conversiones en un solo llamado y así presindir de la iteracion de abajo */
            coinConversion.CurrencyToConvert = coin;
            foreach (var c in CoinsId.Where(c => c != coin.Id.ToString()).ToList())
            {
                coinConversion.Conversions.Add(new Conversion()
                {
                    CurrencyId = long.Parse(c),
                    ConvertedAmount = await GetConversionPrice(c, coin)
                });
            }
            return coinConversion;
        }

        #region Private Methods
        private async Task<double> GetConversionPrice(string convertId, CryptoCurrency coin)
        {
            var headers = new Dictionary<string, string> { { ApiKeyName, ApiKey } };
            var parameters = new Dictionary<string, string> {
                { "amount", coin.AmountToConvert.ToString() },
                { "id", coin.Id.ToString() },
                { "convert_id", convertId }
            };
            var conversions = await HttpService.Get<ConversionResponse>(ApiUrl, ConversionUrl, headers, parameters);
            return conversions.Data.Quote.FirstOrDefault().Value.Price;
        }
        private List<CryptoCurrency> MapCoins(CryptoCurrencyResponse coinsResponse)
        {
            List<CryptoCurrency> coins = new();
            foreach (var data in coinsResponse.Data)
            {
                coins.Add(new CryptoCurrency()
                {
                    Id = data.Value.Id,
                    Symbol = data.Value.Symbol,
                    Name = data.Value.Name,
                    PriceInUsd = data.Value.Quote.Usd.Price
                });
            }
            return coins;
        }
        #endregion
    }
}

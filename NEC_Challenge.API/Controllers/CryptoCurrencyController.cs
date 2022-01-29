using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NEC_Challenge.Core.Interfaces;
using NEC_Challenge.Core.Models;

namespace NEC_Challenge.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CryptoCurrencyController : ControllerBase
    {
        private readonly ICryptoCurrencyService CryptoCurrencyService;

        public CryptoCurrencyController(ICryptoCurrencyService cryptoCurrencyService)
        {
            CryptoCurrencyService = cryptoCurrencyService;
        }

        [HttpGet]
        public async Task<ActionResult> GetCoins()
        {
            return Ok(await CryptoCurrencyService.GetCoins());
        }

        [HttpPost]
        public async Task<ActionResult> GetConversions([FromBody] CryptoCurrency currencyToConvert)
        {
            return Ok(await CryptoCurrencyService.GetConversions(currencyToConvert));
        }
    }
}

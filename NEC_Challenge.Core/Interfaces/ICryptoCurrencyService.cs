using NEC_Challenge.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NEC_Challenge.Core.Interfaces
{
    public interface ICryptoCurrencyService
    {
        Task<List<CryptoCurrency>> GetCoins();
        Task<CryptoCurrencyConversion> GetConversions(CryptoCurrency currency);
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NEC_Challenge.Core.Models
{
    public class CryptoCurrencyConversion
    {
        public CryptoCurrencyConversion()
        {
            Conversions = new List<Conversion>();
        }

        public CryptoCurrency CurrencyToConvert { get; set; }
        public List<Conversion> Conversions { get; set; }
    }
}

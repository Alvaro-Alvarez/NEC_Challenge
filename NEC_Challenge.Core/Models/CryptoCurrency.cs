using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NEC_Challenge.Core.Models
{
    public class CryptoCurrency
    {
        public long Id { get; set; }
        public string Symbol { get; set; }
        public string Name { get; set; }
        public double PriceInUsd { get; set; }
        public int AmountToConvert { get; set; }
    }
}

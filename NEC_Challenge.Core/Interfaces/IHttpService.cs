using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NEC_Challenge.Core.Interfaces
{
    public interface IHttpService
    {
        Task<T> Get<T>(string baseUrl, string endPointUrl, Dictionary<string, string> headers, Dictionary<string, string> sParams);
    }
}

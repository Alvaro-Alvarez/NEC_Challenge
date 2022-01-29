using NEC_Challenge.Core.Interfaces;
using NEC_Challenge.Service;

namespace NEC_Challenge.API.Config
{
    public static class DependencyConfig
    {
        public static IServiceCollection AddRegistration(this IServiceCollection services)
        {
            services.AddSingleton<ICryptoCurrencyService, CryptoCurrencyService>();
            services.AddSingleton<IHttpService, HttpService>();
            return services;
        }
    }
}

# NEC Challenge
### Tecnologías usadas
- .NET Core 6.0
- Angular 13.1
- BootStrap
- SweetAlert
- IDE/Editor: Visual Studio 2022 y Visual Studio Code

### Instalaciones
Preferentemente será necesario tener instalado lo siguiente para el correcto funcionamiento del proyecto.
- Visual Studio 2022 (BackEnd)
- Node Js
- Angular CLI
- TypeScript

### Inicio
Para inicar el front end en angular es necesario primero instalar los paquetes de node, mediante el comando `npm install`, luego inciamos el servicio mediante el comando `ng serve`

## Observaciones
1. CoinMarketCap tiene algunas limitaciones con cuentas gratuitas.

2. Parametros configurables en el archivo appsettings.json del proyecto BackEnd:
[ApiKeyName]:  Nombre key que viaja en el header request
[ApiKey]:  Api key de CoinMarketCap
[ApiUrl]:  Base Url de CoinMarketCap
[CryptoCurrencyUrl]:  EndPoint para obtener información sobre las cripto monedas en CoinMarketCap
[ConversionUrl]:  EndPoint para hacer conversiones de divisas dentro de CoinMarketCap
[CryptoCurrencyIds]:  Lista de Id de las criptomonedas que se mostraran en la web, es posible agregar más monedas mediante esta variable.
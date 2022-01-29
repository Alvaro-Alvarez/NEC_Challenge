export class CryptoCurrency {
    id: number;
    symbol: string;
    name: string;
    priceInUsd: number;
    amountToConvert: number;

    constructor(_id: number, _symbol: string, _name: string, _priceInUsd: number, _amountToConvert: number) 
        {
        this.id = _id;
        this.symbol = _symbol;
        this.name = _name;
        this.priceInUsd = _priceInUsd;
        this.amountToConvert = _amountToConvert;
    }

    public static adapt(item: any): CryptoCurrency {
        return new CryptoCurrency(
            item.id,
            item.symbol,
            item.name,
            item.priceInUsd,
            item.amountToConvert
        );
    }
}
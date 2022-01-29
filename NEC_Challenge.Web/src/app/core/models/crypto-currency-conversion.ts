import { Conversion } from "./conversion";
import { CryptoCurrency } from "./crypto-currency";

export class CryptoCurrencyConversion {
    currencyToConvert: CryptoCurrency;
    conversions: Array<Conversion>;

    constructor(_currencyToConvert: CryptoCurrency, _conversions: Array<Conversion>) 
        {
        this.currencyToConvert = _currencyToConvert;
        this.conversions = _conversions;
    }

    public static adapt(item: any): CryptoCurrencyConversion {
        return new CryptoCurrencyConversion(
            item.currencyToConvert,
            item.conversions
        );
    }
}
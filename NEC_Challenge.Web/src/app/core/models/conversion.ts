export class Conversion {
    currencyId: number;
    convertedAmount: number;

    constructor(_currencyId: number, _convertedAmount: number) 
        {
        this.currencyId = _currencyId;
        this.convertedAmount = _convertedAmount;
    }

    public static adapt(item: any): Conversion {
        return new Conversion(
            item.currencyId,
            item.convertedAmount
        );
    }
}
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CryptoCurrency } from 'src/app/core/models/crypto-currency';
import { CryptoCurrencyConversion } from 'src/app/core/models/crypto-currency-conversion';

@Injectable({
  providedIn: 'root'
})
export class CryptoCurrencyService {

  private apiUrl: string = environment.apiUrl + 'CryptoCurrency';
  
  constructor(
    private http: HttpClient
  ) { }

  getCoins(): Observable<CryptoCurrency[]> {
    return this.http.get<CryptoCurrency[]>(this.apiUrl).pipe(
      map((data: any[]) => {
        return data.map(item => CryptoCurrency.adapt(item)).filter((value)=>{
          return value;
        });
      })
    );
  }
  convertCoins(coin: CryptoCurrency): Observable<CryptoCurrencyConversion> {
    return this.http.post<CryptoCurrencyConversion>(this.apiUrl, coin).pipe(
      map((value: any) => {
        value = CryptoCurrencyConversion.adapt(value);
        return value;
      })
    );
  }
}

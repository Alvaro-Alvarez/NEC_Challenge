import { Component, Input, OnInit } from '@angular/core';
import { CryptoCurrency } from 'src/app/core/models/crypto-currency';

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.scss']
})
export class CoinCardComponent implements OnInit {

  @Input() coin?: CryptoCurrency;
  @Input() date?: Date;

  constructor() { }

  ngOnInit(): void {
  }

}

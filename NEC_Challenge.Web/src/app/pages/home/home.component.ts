import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CryptoCurrency } from 'src/app/core/models/crypto-currency';
import { ConversionComponent } from 'src/app/shared/components/conversion/conversion.component';
import { CryptoCurrencyService } from 'src/app/shared/services/crypto-currency/crypto-currency.service';
import { SpinnerService } from 'src/app/shared/services/spinner/spinner.service';
import { SweetAlertService } from 'src/app/shared/services/sweet-alert/sweet-alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  coins?: CryptoCurrency[] = [];
  date: Date;
  interval: any;
  
  constructor(
    private cryptoCurrencyService: CryptoCurrencyService,
    private spinner: SpinnerService,
    private modalService: NgbModal,
    private alert: SweetAlertService
  ) {
    this.date = new Date();
  }

  ngOnInit(): void {
    this.getCoins();
    // Actualizo los valores de las cryptos cada cierto tiempo mediante un intervalo
    this.startTimerData();
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  getCoins(interval: boolean = false){
    if (!interval) this.spinner.Show();
    this.cryptoCurrencyService.getCoins().subscribe(res => {
      if (!interval) this.spinner.Hide();
      this.coins = res;
    }, err => {
      if (!interval) this.spinner.Hide();
      this.alert.error(err.error.error);
    })   
  }
  openConversion(coinToConvert: CryptoCurrency){
    const modalRef = this.modalService.open(ConversionComponent, { size: "lg" });
    modalRef.componentInstance.coins = this.coins;
    modalRef.componentInstance.coinToConvert = coinToConvert;
  }
  startTimerData() {
    this.interval = setInterval(() => {
      this.getCoins(true);
    }, 10000)
  }
}

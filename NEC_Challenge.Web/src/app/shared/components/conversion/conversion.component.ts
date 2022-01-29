import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CryptoCurrency } from 'src/app/core/models/crypto-currency';
import { CryptoCurrencyService } from '../../services/crypto-currency/crypto-currency.service';
import { SpinnerService } from '../../services/spinner/spinner.service';
import { Conversion } from '../../../core/models/conversion';
import { CryptoCurrencyConversion } from 'src/app/core/models/crypto-currency-conversion';
import { SweetAlertService } from '../../services/sweet-alert/sweet-alert.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  @Input() coins?: CryptoCurrency[] = [];
  @Input() coinToConvert!: CryptoCurrency;
  conversionForm!: FormGroup;
  conversion!: CryptoCurrencyConversion

  constructor(
    public modal: NgbActiveModal,
    private builder: FormBuilder,
    private cryptoCurrencyService: CryptoCurrencyService,
    private spinner: SpinnerService,
    private alert: SweetAlertService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.conversionForm = this.builder.group({
      value: ['', [Validators.required]]
    });
  }
  getConversions(){
    this.spinner.Show();
    this.coinToConvert.amountToConvert = this.conversionForm.get('value')?.value;
    this.cryptoCurrencyService.convertCoins(this.coinToConvert).subscribe(res => {
      this.spinner.Hide();
      this.conversion = res;
    }, err => {
      console.log(err.statusText + ': ' + err.message);
      this.spinner.Hide();
      this.alert.error(err.error.error);
    })   
  }
  getNameById(id: number){
    const coin = this.coins?.find(c => c.id === id);
    return coin ? coin.name : '';
  }
  close(){
    this.modal.dismiss();
  }
}

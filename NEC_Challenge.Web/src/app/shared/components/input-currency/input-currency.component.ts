import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['./input-currency.component.scss']
})
export class InputCurrencyComponent implements OnInit {

  @Input() parentForm!: FormGroup;
  @Input() keyInput!: string;
  @Input() label!: string;
  @Input() placeholder?: string;
  @Input() maxlength: number = 50;
  @Input() br ? = true;
  @Input() validate ? = true;
  @Input() errMsg ? = '*el campo es requerido';
  @Input() currencySing ? = '';
  @Input() thousandsSeparator ? = '.';
  @Input() decimalSeparator ? = '';
  @Input() decimalPrecision ? = '0';
  @Output() changeInput: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  change(event: any){
    let value = this.parentForm.get(this.keyInput)?.value;
    this.changeInput.emit(value);
  }

}

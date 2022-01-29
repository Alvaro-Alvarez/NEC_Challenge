import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }
  error(msg: string){
    Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: msg
      })
  }
}

import { Component } from '@angular/core';
import { ClimaService } from './services/clima.service';
import { PaisesService } from './services/paises.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Datos;
  Paises;
  ciudad: string = '';

  constructor(public clima: ClimaService, private paises:PaisesService) { this.getDataCountrys() }

  getData(name: HTMLInputElement, code: HTMLInputElement) {
    if (name.value !== '' && code.value !== '') {
      this.clima.getData(name.value, code.value)
        .subscribe(
          data => {
            // console.log(data);
            this.Datos = data;
          }
      );
      this.ciudad = name.value;
      name.value = '';
      code.value = '';
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Campos Incorrectos o Vacios!'
      });
    }
    name.focus();
    return false;
  }

  getDataCountrys() { 
    this.paises.getDataCountrys().subscribe(data => {
      // console.log(data);
      this.Paises = data;
    });
  }
}

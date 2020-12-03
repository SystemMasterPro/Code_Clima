import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  client:string='v1GFhGMuFyC9QvyoaQboMvAAGRTRoh0a'
  constructor(private http: HttpClient) { }
  
  getDataCountrys() {
    return this.http.get(`https://dataservice.accuweather.com/locations/v1/countries/SAM?apikey=${this.client}&language=es`);
  }
}

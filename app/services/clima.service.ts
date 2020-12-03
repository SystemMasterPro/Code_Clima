import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  HTTP: string = 'api.openweathermap.org/data/2.5/weather?q=';
  ApiKey: string = 'a30d261606b4f0a054faf59d03c7ec14';

  constructor(public http: HttpClient) { }
  
  getData(ciudad,codigo) {
   return this.http.get(`https://${this.HTTP}${ciudad},${codigo}&appid=${this.ApiKey}&units=metric`);
  }
}

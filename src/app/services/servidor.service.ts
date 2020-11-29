import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {


  
  url : String = "http://localhost/dados/";
  api : String = "https://c504917626eb.ngrok.io/"

  constructor(public http : HttpClient) { }

  getData(){
    return this.http.get(this.url+"banco.php").pipe(map(res => res.valueOf()));
  }

  getDataPtyhon(){
    return this.http.get(this.api+"registros").pipe(map(res => res.valueOf()));
  }

  getDataTeste(): Observable<any>{

    return this.http.get(this.url+"banco.php").pipe(map(res => res.valueOf()));
  }

  getDataApi(endpoint){

    return this.http.get(this.api+endpoint).pipe(map(res => res.valueOf()));
  }
  
}

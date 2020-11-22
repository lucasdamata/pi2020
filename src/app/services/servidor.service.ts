import { Injectable } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  
  url : String = "http://localhost/dados/";
  api : String = "http://127.0.0.1:5000/"

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
}

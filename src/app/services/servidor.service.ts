import { Injectable } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  url : String = "http://localhost/dados/";

  constructor(public http : HttpClient) { }

  getData(){
    return this.http.get(this.url+"banco.php").pipe(map(res => res.valueOf()));
  }
}

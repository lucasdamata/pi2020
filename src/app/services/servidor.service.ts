import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {


  apiLocal : String = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=-19.4569334&longitude=-46.2760992&localityLanguage=pt";
  url : String = "http://localhost/dados/";
  api : String = "http://127.0.0.1:5000/"

  constructor(public http : HttpClient) { }

  getLocationApi(lat, lng){
    return this.http.get("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude="+lat+"&longitude="+lng+"&localityLanguage=pt").pipe(map(res => res.valueOf()));

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

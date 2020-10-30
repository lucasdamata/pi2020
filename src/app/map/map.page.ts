
import { Component, OnInit } from '@angular/core';
import {ToastController,Platform,LoadingController} from '@ionic/angular';
import {GoogleMaps,GoogleMap,GoogleMapsEvent,Marker,GoogleMapsAnimation,MyLocation} from '@ionic-native/google-maps';
import {Polygon,BaseArrayClass,ILatLng,LatLng} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

declare var google;


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {


  loading: any;
  
  @ViewChild('map',  {static: false}) mapElement: ElementRef;
  
  map: any;
  address:string;
  lat: string;
  long: string;  
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: any;

  placeid: any;
  GoogleAutocomplete: any;



  


  constructor(private platform: Platform,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              private geolocation: Geolocation,
              private nativeGeocoder: NativeGeocoder,    
              public zone: NgZone,
              ) { 

                this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
                this.autocomplete = { input: '' };
                this.autocompleteItems = [];
              }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }



loadMap() {
    
    //FIRST GET THE LOCATION FROM THE DEVICE.
    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 20,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      } 
      
      //LOAD THE MAP WITH THE PREVIOUS VALUES AS PARAMETERS.
      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude); 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions); 
      this.map.addListener('tilesloaded', () => {
        console.log('accuracy',this.map, this.map.center.lat());
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
        this.lat = this.map.center.lat()
        this.long = this.map.center.lng()
      }); 

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  
  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords "+lattitude+" "+longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5    
    }; 
    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if(value.length>0)
          responseAddress.push(value); 
        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value+", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) =>{ 
        this.address = "Address Not Available!";
      }); 
  }

  //FUNCTION SHOWING THE COORDINATES OF THE POINT AT THE CENTER OF THE MAP
  ShowCords(){
    alert('lat' +this.lat+', long'+this.long )
  }

  
  

/*
 loadMap() {
  this.map = GoogleMaps.create('map_canvas', {
    camera: {
      target: this.GORYOKAKU_POINTS
    }
  });

  let polygon: Polygon = this.map.addPolygonSync({
    'points': this.GORYOKAKU_POINTS,
    'strokeColor' : '#AA00FF',
    'fillColor' : '#00FFAA',
    'strokeWidth': 10
  });

  let points: BaseArrayClass<ILatLng> = polygon.getPoints();

  points.forEach((latLng: ILatLng, idx: number) => {
    let marker: Marker = this.map.addMarkerSync({
      draggable: true,
      position: latLng
    });
    marker.on(GoogleMapsEvent.MARKER_DRAG).subscribe((params) => {
      let position: LatLng = params[0];
      points.setAt(idx, position);
    });
  });

}
*/

  
}
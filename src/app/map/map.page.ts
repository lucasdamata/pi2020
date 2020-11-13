import { Component, OnInit } from '@angular/core';
import {ToastController,Platform,LoadingController, AlertController} from '@ionic/angular';
import {GoogleMaps,GoogleMap,GoogleMapsEvent,Marker,GoogleMapsAnimation,MyLocation, MarkerOptions} from '@ionic-native/google-maps';
import {Polygon,BaseArrayClass,ILatLng,LatLng} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { Router, NavigationExtras } from '@angular/router';

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
  lat: string;
  long: string;  

  location: any;
  local:any;
 

  constructor(private platform: Platform,
              public alertController: AlertController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              private geolocation: Geolocation,
              private nativeGeocoder: NativeGeocoder,    
              public zone: NgZone,
              private router: Router
              ) { }

  async ngOnInit() {
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }

  async salvarLocal() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Deseja salvar esse local ?',
      message: this.map.getCenter(),
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Salvar',
          handler: () => {
            this.salvarCoords(this.map.getCenter());
          }
        }
      ]
    });


    await alert.present();
  }

  salvarCoords(local:any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(local)
      }
    };
    this.router.navigate(['/tabs/tab3'], navigationExtras);
    console.log(navigationExtras)
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
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        this.addMarker(this.map);
    
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

 
  addMarker(map:any){
  
    let Marker = new google.maps.Marker({
      title:"pragas",
      map: map,
      draggable:true,
      animation: google.maps.Animation.BOUNCE,
      position: map.getCenter()
    });

  }
}
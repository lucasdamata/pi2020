import { Component, OnInit } from '@angular/core';
import {ToastController,Platform,LoadingController, AlertController} from '@ionic/angular';
import {GoogleMaps,GoogleMap,GoogleMapsEvent,Marker,GoogleMapsAnimation,MyLocation, MarkerOptions} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { Router, NavigationExtras } from '@angular/router';

import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';



@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map: GoogleMap;
  loading: any;
  coords:any;
 

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
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
    this.mylocation();
    
  }
  loadMap() {

    
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        zoom: 300,
        tilt: 30
      }
    });

  }

  async onButtonClick() {
    this.map.clear();

    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();

    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      this.loading.dismiss();
      console.log(JSON.stringify(location, null ,2));

      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        tilt: 30
      });

      // add a marker
      let marker: Marker = this.map.addMarkerSync({
        title: 'Pragas aqui ?',
        snippet: 'Esta é sua localização',
        position: location.latLng,
        animation: GoogleMapsAnimation.BOUNCE
      });

      // show the infoWindow
      marker.showInfoWindow();

     
    });
  }

  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }

  info(){
    alert("informações do local");
  }

  save(){
    alert("salvar coordenadas");
  }

  mylocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.coords = resp;
      
     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }
 
}
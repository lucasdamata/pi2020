import { Component, OnInit } from '@angular/core';
import { ToastController, Platform, LoadingController, AlertController } from '@ionic/angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation, MarkerOptions } from '@ionic-native/google-maps';
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
  local:any;
  lat:any;
  lng:any;



  constructor(private platform: Platform,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public zone: NgZone,
    private router: Router
  ) { 

    this.geolocation.getCurrentPosition().then(resp=>{
      this.local = resp.coords;
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
    })
  }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    this.loadMap();


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
      message: 'carregando aguarde...'
    });
    await this.loading.present();

    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      this.loading.dismiss();
      console.log(JSON.stringify(location, null, 2));

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


  //alerta para salvar local
  async save(){

    this.local = (await this.geolocation.getCurrentPosition()).coords

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Salvar este local ?',
      message: "latitude: "+String(this.lat)+"<br>longitude: "+this.lng,
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
            alert.dismiss();
            this.salvarCoords(this.local);
            
          }
        }
      ]
    });

    await alert.present();
  }

  salvarCoords(loc) {
    let cor = {
      lat: loc.latitude,
      lng: loc.longitude
    }
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(cor)
      }
    };
    this.router.navigate(['tabs/tab3'], navigationExtras);
  }

}
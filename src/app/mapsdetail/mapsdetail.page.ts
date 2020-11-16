import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  Polygon,
  BaseArrayClass,
  ILatLng,
  LatLng,
  GoogleMapOptions,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';
import { LoadingController, NavController, NavParams, Platform, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

declare var google;

@Component({
  selector: 'app-mapsdetail',
  templateUrl: './mapsdetail.page.html',
  styleUrls: ['./mapsdetail.page.scss'],
})
export class MapsdetailPage implements OnInit {

  map: any;
  local: any;
  loading: any;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private platform: Platform,
    public route: ActivatedRoute,
    public router: Router,) {

  }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();

  }

  loadMap() {

    this.local = this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.local = JSON.parse(params.special);
        console.log(this.local)

        let mapOptions: GoogleMapOptions = {
          camera: {
             target: {
               lat: Number(this.local.lat),
               lng: Number(this.local.lng)
             },
             zoom: 18,
             tilt: 30
           }
        };

        this.map = GoogleMaps.create('map_canvas', mapOptions);

        let marker: Marker = this.map.addMarkerSync({
          title: 'Praga detectada aqui!!!',
          icon: 'blue',
          animation: 'BOUNCE',
          position: {
            lat: this.local.lat,
            lng: this.local.lng
          }
        });
      }
    });
  }

}

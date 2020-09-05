
import { Component, OnInit } from '@angular/core';
import {ToastController,Platform,LoadingController} from '@ionic/angular';
import {GoogleMaps,GoogleMap,GoogleMapsEvent,Marker,GoogleMapsAnimation,MyLocation} from '@ionic-native/google-maps';
import {Polygon,BaseArrayClass,ILatLng,LatLng} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map: GoogleMap;
  loading: any;
  
  GORYOKAKU_POINTS: ILatLng[] = [
    {lat: -18.5872582,           lng: -46.514674899999996},
    {lat: -18.5872583,           lng: -46.514674899999996},
    {lat: -18.5872584,           lng: -46.514674899999996},
    {lat: -18.5872585,           lng: -46.514674899999996},
    {lat: -18.5872582,           lng: -46.514674899999996},
    {lat: -18.5872582,           lng: -46.514674899999996},
    {lat: -18.5872582,           lng: -46.514674899999996},
    

  ];

  constructor(private platform: Platform,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              ) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }

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
    // pontos de area
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

  async onButtonClick() {
    this.map.clear();

    this.loading = await this.loadingCtrl.create({
      message: 'Aguarde carregando...'
    });
    await this.loading.present();

    // pegar minha localização
    this.map.getMyLocation().then((location: MyLocation) => {
      this.loading.dismiss();
      console.log(JSON.stringify(location, null ,2));

      // movendo o mapa
      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        tilt: 30
      });

      // adicionando marcador
      let marker: Marker = this.map.addMarkerSync({
        title: 'Essa é sua localização aproximada',
        position: location.latLng,
        animation: GoogleMapsAnimation.BOUNCE
      });

      // mostrar a janela
      marker.showInfoWindow();

      // mostrar mapa
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.showToast('clicked!');
      });
    })
    .catch(err => {
      this.loading.dismiss();
      this.showToast(err.error_message);
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


}

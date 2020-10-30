import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { HttpClientModule } from '@angular/common/http';
import { NavController, NavParams } from '@ionic/angular';
import { DetalhesPage } from './detalhes/detalhes.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';


//import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Camera } from '@ionic-native/camera/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NavParams,
    Geolocation,
    NativeGeocoder,
    DetalhesPage,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

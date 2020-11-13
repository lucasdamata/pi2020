import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-mapsdetail',
  templateUrl: './mapsdetail.page.html',
  styleUrls: ['./mapsdetail.page.scss'],
})
export class MapsdetailPage implements OnInit{

  
@ViewChild('map',  {static: false}) mapElement: any;

map: any;

constructor(public navCtrl: NavController,
            private platform: Platform) { }

  ngOnInit() {
    this.mapElement = this.mapElement.nativeElement;

  }

 


}

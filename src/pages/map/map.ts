import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  map: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewCanEnter() {
    this.map = [[101, 102, 103, 104, 105],
                [-1, -1, -1, -1, -1],
                [106, 107, -1, 108, 109],
                [110, 111, -1, 112, 113],
                [-1, -1, -1, -1, -1],
                [114, 115, 116, 117, 118]];
    // start =
    // end =
  }

}

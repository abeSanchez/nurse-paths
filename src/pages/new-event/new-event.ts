import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers } from '@angular/http';
import { Http } from '@angular/http';
import { PatientService } from '../../services/patient.service';


/**
 * Generated class for the NewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-event',
  templateUrl: 'new-event.html',
})
export class NewEventPage {

  patient: any;
  room: any;
  time: any;
  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private patientService: PatientService, private http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  close() {
    this.navCtrl.pop();
  }

  submit() {
    var data;
    this.postJson('http://www.willhan.xyz/patients', data);
    this.navCtrl.pop();
  }

  postJson(url, data) {
      return this.http.post( url, '{"rows":' + JSON.stringify(data) + '}', { headers: this.headers } ).map(res => res.json()).subscribe(data => console.log(data));
  }

}

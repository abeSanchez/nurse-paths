import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { App } from 'ionic-angular';
import { PatientService } from '../../services/patient.service';
import { EventService } from '../../services/event.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(private http: Http, private patientService: PatientService, private eventService: EventService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.setEvents();
    this.setPatients();
    setTimeout(() => this.navCtrl.setRoot(TabsPage), 2000)
  }

  setPatients() {
      var url = 'http://www.willhan.xyz/patients';
        url.replace(/ /g, "%20");
        this.http.get(url).map(res => res.json()).subscribe(data => {
          this.patientService.setPatients(data);
        },
          err => {
            console.log("Failed to get from API");
          });
  }

  setEvents() {
      var url = 'http://www.willhan.xyz/events';
        url.replace(/ /g, "%20");
        this.http.get(url).map(res => res.json()).subscribe(data => {
          this.eventService.setEvents(data);
          console.log(data)
        },
          err => {
            console.log("Failed to get from API");
          });
  }




}

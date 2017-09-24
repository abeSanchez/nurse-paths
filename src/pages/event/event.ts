import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventService } from '../../services/event.service';
import { PatientService } from '../../services/patient.service';
import { ModalController } from 'ionic-angular';
import { PatientPage } from '../patient/patient';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  event: any;
  patient: any;

  constructor(private modalCtrl: ModalController, private patientService: PatientService, private eventService: EventService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewCanEnter() {
    this.event = this.eventService.getSelectedEvent();
    this.getPatient();
  }

  getPatient() {
    this.patient = this.patientService.getPatient(this.event.patientId);
    console.log(this.patient)
  }

  openPatient() {
    this.patientService.setSelectedPatient(this.patient);
    let modal = this.modalCtrl.create(PatientPage);
    modal.present();
  }

  close() {
    this.navCtrl.pop();
  }

}

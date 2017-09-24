import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PatientService } from '../../services/patient.service';
import { PatientPage } from '../patient/patient';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-patients',
  templateUrl: 'patients.html'
})
export class PatientsPage {
  patients: any;

  constructor(private modalCtrl: ModalController, private patientService: PatientService, public navCtrl: NavController) {

  }

  ionViewCanEnter() {
    this.patients = this.patientService.getPatients();
  }

  openPatient(patient) {
    this.patientService.setSelectedPatient(patient);
    let modal = this.modalCtrl.create(PatientPage);
    modal.present();
  }

}

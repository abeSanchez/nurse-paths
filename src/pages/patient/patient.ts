import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PatientService } from '../../services/patient.service';

/**
 * Generated class for the PatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html',
})
export class PatientPage {
  patient: any;

  constructor(private patientService: PatientService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewCanEnter() {
    this.patient = this.patientService.getSelectedPatient();
  }

  close() {
    this.navCtrl.pop();
  }

}

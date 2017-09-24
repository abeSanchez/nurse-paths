import { Injectable } from '@angular/core';

@Injectable()
export class PatientService {
  patients: any;
  selectedPatient: any;

  constructor(){

  }

  setSelectedPatient(patient) {
    this.selectedPatient = patient;
  }

  getSelectedPatient() {
    return this.selectedPatient;
  }

  setPatients(patients) {
    this.patients = patients;
  }

  getPatients() {
    return this.patients;
  }

  getPatient(id) {
    for (var i = 0; i < this.patients.length; i++) {
      if(this.patients[i].idNumber == id) return this.patients[i];
    }3
  }


}

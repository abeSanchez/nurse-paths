import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { PatientsPage } from '../patients/patients';
import { AgendaPage } from '../agenda/agenda';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AgendaPage;
  tab2Root = MapPage;
  tab3Root = PatientsPage;

  constructor() {

  }
}

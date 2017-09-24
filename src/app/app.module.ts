import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MapPage } from '../pages/map/map';
import { NewEventPage } from '../pages/new-event/new-event';
import { PatientsPage } from '../pages/patients/patients';
import { PatientPage } from '../pages/patient/patient';
import { AgendaPage } from '../pages/agenda/agenda';
import { TabsPage } from '../pages/tabs/tabs';
import { EventPage } from '../pages/event/event';
import { StartPage } from '../pages/start/start';
import { HttpModule } from '@angular/http';
import { EventService } from '../services/event.service';
import { PatientService } from '../services/patient.service';
import { UserService } from '../services/user.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MapPage,
    PatientsPage,
    AgendaPage,
    TabsPage,
    EventPage,
    PatientPage,
    StartPage,
    NewEventPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    PatientsPage,
    PatientPage,
    AgendaPage,
    TabsPage,
    EventPage,
    StartPage,
    NewEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventService,
    PatientService,
    UserService
  ]
})
export class AppModule {}

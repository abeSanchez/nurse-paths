import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { EventPage } from '../event/event';
import { NewEventPage } from '../new-event/new-event';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})
export class AgendaPage {
  events: any;

  constructor(private eventService: EventService, private modalCtrl: ModalController, public navCtrl: NavController) {

  }

  ionViewCanEnter() {
    this.events = this.eventService.getEvents();
  }

  openEvent(event) {
    this.eventService.setSelectedEvent(event);
    let modal = this.modalCtrl.create(EventPage);
    modal.present();
  }

  openAdd() {
    let modal = this.modalCtrl.create(NewEventPage);
    modal.present();
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class EventService {
  events: any;
  selectedEvent: any;

  constructor(){

  }

  setEvents(events) {
    this.events = events;
  }

  getEvents() {
    return this.events;
  }

  setSelectedEvent(event) {
    this.selectedEvent = event;
  }

  getSelectedEvent() {
    return this.selectedEvent;
  }

}

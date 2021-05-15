import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'event-list',
  templateUrl: 'event-list.component.html'
})
export class EventsListComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10.00 am',
    price: 599.99,
    imageURl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'Vadodara',
      country: 'India'

    }
  };
}

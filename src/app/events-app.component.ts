import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <div class="container"><event-list></event-list></div>
  `,
  
})
export class EventsAppComponent {
  title = 'app';
}

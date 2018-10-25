import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-events',
    templateUrl: './events.component.html'
})


export class EventsComponent implements OnInit {
  events: any[];
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
    ) {
  }

    ngOnInit(): void {
      this.events = this.route.snapshot.data['events'];
    }

}

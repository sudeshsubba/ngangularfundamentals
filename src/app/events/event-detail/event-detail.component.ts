import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.css']
})

export class EventDetailComponent implements OnInit {
    event: any;

    constructor(private eventService: EventService, private activeRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.getEvent();
    }

    getEvent() {
        this.event = this.eventService.getEvent(+ this.activeRoute.snapshot.paramMap.get('id'));
    }
}

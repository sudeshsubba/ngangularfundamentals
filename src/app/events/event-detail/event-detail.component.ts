import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ISession } from '../event.model';

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.css']
})

export class EventDetailComponent implements OnInit {
    event: any;
    addMode: boolean;
    filterBy = 'all';
    sortBy = 'votes';

    constructor(
        private eventService: EventService,
        private activeRoute: ActivatedRoute
        ) {
    }

    ngOnInit() {
        this.getEvent();
        this.addMode = false;
    }

    getEvent() {
        this.activeRoute.params.forEach(
            (params: Params) => {
                this.event = this.eventService.getEvent(+params['id']);
            }
        );
        this.addMode = false;
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const sessionId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = sessionId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}

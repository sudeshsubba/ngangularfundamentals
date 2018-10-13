import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../events/event.model';

@Component({
    selector: 'app-event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: ['./event-thumbnail.component.css']
})

export class EventThumbnailComponent {
    @Input() event: IEvent;
    @Output() eventClick = new EventEmitter();

    handleClickMe() {
        this.eventClick.emit(this.event.name);
    }

}





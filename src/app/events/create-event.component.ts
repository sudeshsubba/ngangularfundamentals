import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
    selector: 'app-create-event',
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.css']
})

export class CreateEventComponent {
    isDirty = true;
    newEvent;
    constructor (private eventService: EventService, private router: Router) {
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues) ;
        this.isDirty = false;
        this.router.navigate(['/events']);
    }


    onCancel(): void {
        this.router.navigate(['/events']);
    }


}

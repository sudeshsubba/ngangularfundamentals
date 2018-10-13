import { CanDeactivate } from '@angular/router';
import { CreateEventComponent } from '../events/create-event.component';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CreateEventGuard implements CanDeactivate<CreateEventComponent> {

    canDeactivate(target: CreateEventComponent) {
        if (target.isDirty) {
            return window.confirm('Do you want to cancel without saving changes (Guard)?');
        }
        return true;
    }
}


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Observable } from 'rxjs';
import { ToastrService } from '../../services/toastr.service';

@Injectable({
    providedIn: 'root'
})

export class EventDetailGuard implements CanActivate {
    constructor(
        private eventService: EventService,
        private router: Router,
        private toastrService: ToastrService ) {

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const eventExists = !!this.eventService.getEvent(+next.url[1].path);
        if (!eventExists) {
            this.toastrService.error('Invalid event Id', 'Error');
            this.router.navigate(['/events']);
            return false;
        }
        return true;
    }
}

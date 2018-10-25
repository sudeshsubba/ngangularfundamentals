import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class EventDetailGuard implements CanActivate {
    constructor(
        private eventService: EventService,
        private router: Router) {

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const eventExists = !!this.eventService.getEvent(+next.url[1].path);
        if (!eventExists) {
            this.router.navigate(['/events']);
            return false;
        }
        return true;
    }
}

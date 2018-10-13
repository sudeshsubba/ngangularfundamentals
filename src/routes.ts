import { EventsComponent } from './app/events/events.component';
import { EventDetailComponent } from './app/events/event-detail/event-detail.component';
import { CreateEventComponent } from './app/events/create-event.component';
import { ErrorComponent } from './app/shared/errors.component';
import { EventDetailGuard } from './app/events/event-detail/event-detail.guard';
import { CreateEventGuard } from './app/events/create-event.guard';
import { EventResolver } from './app/services/event-resolver.service';
import { CreateSessionComponent } from './app/events/event-detail/create-session.component';

export const appRoutes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: [CreateEventGuard]},
    { path: 'events', component: EventsComponent, resolve: {events: EventResolver } },
    { path: 'eventdetail/:id', component: EventDetailComponent, canActivate: [EventDetailGuard] },
    { path: 'error', component: ErrorComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren: './user/user.module#UserModule'},
    { path: 'events/session/new', component: CreateSessionComponent }
] ;


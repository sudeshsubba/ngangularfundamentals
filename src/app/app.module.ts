import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';

import { appRoutes } from '../routes';
import { ErrorComponent, DurationPipe } from './shared/index';

import {
  EventsComponent,
  EventThumbnailComponent,
  CreateEventComponent,
} from './events/index';

import {
  EventDetailComponent,
  CreateSessionComponent,
  SessionListComponent,
  CollapsibleWellComponent
} from './events/event-detail/index';

import { AuthService } from './user/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent,
    CreateEventComponent,
    ErrorComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('Move?');
  }
  return true;
}


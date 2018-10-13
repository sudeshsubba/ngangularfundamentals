import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';

import { appRoutes } from '../routes';
import { ErrorComponent } from './shared/errors.component';

import {
  EventsComponent,
  EventThumbnailComponent,
  EventDetailComponent,
  CreateEventComponent,
  CreateSessionComponent
} from './events/index';
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
    CreateSessionComponent
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


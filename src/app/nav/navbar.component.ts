import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService } from '../services/event.service';
import { ISession } from '../events';
import { $ } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm = '';
  foundSessions: ISession[];

  constructor(private authService: AuthService, private eventService: EventService) {
  }

  ngOnInit() {
  }

  searchSessions(searchTerm: string) {
      this.eventService.searchSessions(searchTerm)
      .subscribe(sessions => {
        this.foundSessions = sessions;
        console.log(this.foundSessions);
      });
  }

}

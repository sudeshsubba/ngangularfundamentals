import { Component, Input } from '@angular/core';
import { ISession } from '../index';
@Component ({
    selector: 'app-session-list',
    templateUrl: './session-list.component.html',
    styleUrls: ['./session-list.component.css']
})

export class SessionListComponent {
    @Input() sessions: ISession[];
}


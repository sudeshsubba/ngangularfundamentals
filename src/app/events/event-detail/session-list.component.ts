import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../index';
@Component ({
    selector: 'app-session-list',
    templateUrl: './session-list.component.html',
    styleUrls: ['./session-list.component.css']
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    filteredSessions: ISession[] = [];

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.filteredSessions.sort(this.sortByNameAsc) : this.filteredSessions.sort(this.sortByVotesDesc);
        }
    }

    filterSessions(filter: string) {
        if (filter === 'all') {
            this.filteredSessions = this.sessions.slice(0);
        } else {
            this.filteredSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    }

     sortByNameAsc(s1: ISession, s2: ISession) {
        if (s1.name > s2.name) {
             return 1;
        } else if (s1.name === s2.name) {
            return 0;
        } else {return -1; }
    }

    sortByVotesDesc(s1: ISession, s2: ISession) {
        return s2.voters.length - s1.voters.length;
    }
}


import {Component, OnInit} from '@angular/core';
import './app.component.htm';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'angular-application',
    template: require('./app.component.htm')
})
export class AppComponent implements OnInit {
    versionNumber: string = 'v.2.0.0';

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}

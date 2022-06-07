import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss'],
    animations: []
})
export class LogoutComponent implements OnInit {
    user: any = {};

    constructor(
        public _router: Router,
        private authService: MsalService,
    ) { }
    ngOnInit() {
        this.logout();
    }
    logout() {
        if (this.authService.instance.getActiveAccount() != null || this.authService.instance.getAllAccounts().length >= 1) {
            this.authService.logout();
        } else {
            this._router.navigate(['auth','login']);
        }
    }
    login() {
        this._router.navigate(['auth','login']);
    }
}

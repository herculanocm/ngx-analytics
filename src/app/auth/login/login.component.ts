import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalBroadcastService, MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { AuthenticationResult, InteractionType, PopupRequest, RedirectRequest } from '@azure/msal-browser';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: []
})
export class LoginComponent implements OnInit {
    user: any = {};

    constructor(
        public _router: Router,
        @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
        private authService: MsalService,
        private msalBroadcastService: MsalBroadcastService
    ) { }
    ngOnInit() {
        if (this.isLogged()) {
            this._router.navigate(['pages', 'home']);
        }
    }
    logout() {
        if (this.authService.instance.getActiveAccount() != null || this.authService.instance.getAllAccounts().length >= 1) {
            this.authService.logout();
        }
    }
    account(): void {
        console.log(this.authService.instance.getAllAccounts());
    }
    isLogged(): boolean {
        // console.log('aqui');
        // console.log(this.authService.instance.getActiveAccount());
        // console.log(this.authService.instance.getAllAccounts());
        // let activeAccount = this.authService.instance.getActiveAccount();
        if (this.authService.instance.getAllAccounts().length > 0) {
            let accounts = this.authService.instance.getAllAccounts();
             this.authService.instance.setActiveAccount(accounts[0]);
             return true;
        } else {
            return false;
        }
    }
    login() {
        this._router.navigate(['pages', 'home']);
        /*
        if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
            console.log('if');
            if (this.msalGuardConfig.authRequest) {
                this.authService.loginPopup({ ...this.msalGuardConfig.authRequest } as PopupRequest)
                    .subscribe((response: AuthenticationResult) => {
                        this.authService.instance.setActiveAccount(response.account);
                    });
            } else {
                this.authService.loginPopup()
                    .subscribe((response: AuthenticationResult) => {
                        this.authService.instance.setActiveAccount(response.account);
                    });
            }
        } else {
            console.log('else');
            if (this.msalGuardConfig.authRequest) {
               
                

                
                this.authService.instance.handleRedirectPromise().then(authResult => {
                    this.authService.loginRedirect({ ...this.msalGuardConfig.authRequest } as RedirectRequest);
                }).catch(err => {
                    console.log(err);
                });
                

                // this.authService.loginRedirect({ ...this.msalGuardConfig.authRequest } as RedirectRequest);
            } else {
                this.authService.loginRedirect();
            }
        }
        */

    }
}

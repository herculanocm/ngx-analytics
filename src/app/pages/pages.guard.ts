import { Injectable } from '@angular/core';
import { Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs';
import { MENU_ITEMS, NbMenuItemAux } from '../pages/pages-menu';

@Injectable()
export class PagesGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router, private authService: MsalService) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        console.log('canActivate');
        const account = this.authService.instance.getActiveAccount();

        if (!account || typeof (account) == 'undefined'
            || account.idTokenClaims == null || account.idTokenClaims.roles == null ||
            account.idTokenClaims.roles.length == 0) {
            this.router.navigate(['pages', 'miscellaneous', 'not-authorized']);
        } else {
            console.log(state);

            const roles = account.idTokenClaims.roles;

            const flt = this.verificaAcessos(MENU_ITEMS, roles, state.url);
            if (flt.length == 0) {
                this.router.navigate(['pages', 'miscellaneous', 'not-authorized']);
                return false;
            } else {
                return true;
            }

        }
    }

    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        console.log('canActivateChild');
        const account = this.authService.instance.getActiveAccount();

        if (!account || typeof (account) == 'undefined'
            || account.idTokenClaims == null || account.idTokenClaims.roles == null ||
            account.idTokenClaims.roles.length == 0) {
            this.router.navigate(['pages', 'miscellaneous', 'not-authorized']);
        } else {
            return true;
        }

    }

    verificaAcessos(menus: NbMenuItemAux[], roles: string[], link: string): NbMenuItemAux[] {
        return menus.filter(menu => {
            return menu.link != null && link.indexOf(menu.link) > -1 && (
                menu.roles.filter(role => {
                    return role === 'ROLE_ANY' || (
                        roles.filter(roleUser => {
                            return roleUser === role;
                        })
                    ).length > 0;
                })
            ).length > 0;
        });
    }

}

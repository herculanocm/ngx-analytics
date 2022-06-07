import { Injectable } from '@angular/core';
import { Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs';
import { isArray } from 'rxjs/internal/util/isArray';
import { MENU_ITEMS, NbMenuItemAux } from './pages/pages-menu';

@Injectable()
export class AppGuard implements CanActivateChild {

    constructor(private router: Router, private authService: MsalService) { }

    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        console.log('canActivateChild');
        const account = this.authService.instance.getActiveAccount();

        if (!account || typeof (account) == 'undefined'
            || account.idTokenClaims == null || account.idTokenClaims.roles == null ||
            account.idTokenClaims.roles.length == 0) {
                this.router.navigate(['auth', 'login']);
        } else {

            const roles = account.idTokenClaims.roles;
            let menu = this.verificaAcessos(MENU_ITEMS, roles, state.url);
            menu = this.aplicaChildrens(menu, roles, state.url);

            if (menu.length > 0) {
                return true;
            } else {
                this.router.navigate(['pages', 'miscellaneous', 'not-authorized']);
                return true;
            }

        }

    }

    verificaAcessos(menus: NbMenuItemAux[], roles: string[], link: string): NbMenuItemAux[] {
        return menus.filter(menu => {
            return (
                menu.roles.filter(role => {
                    return role === 'ROLE_ANY' || (
                        roles.filter(roleUser => {
                            return roleUser === role;
                        })
                    ).length > 0;
                })
            ).length > 0 && menu.link == link;
        });
    }

    aplicaChildrens(menu: NbMenuItemAux[], roles: string[], link: string): NbMenuItemAux[] {
        for (let i = 0; i < menu.length; i++) {
            if (isArray(menu[i].children)) {
                menu[i].children = this.verificaAcessos(
                    menu[i].children,
                    roles,
                    link
                );
            }
        }
        return menu;
    }

}

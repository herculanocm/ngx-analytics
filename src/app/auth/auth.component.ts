import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    styleUrls: ['./auth.component.scss'],
    template: `
    <ngx-sample-layout-auth>
    <router-outlet></router-outlet>
    </ngx-sample-layout-auth>  
  `,
})
export class AuthComponent implements OnInit {
    user: any = {};
  
    constructor(
        public _router: Router
    ) { }
    ngOnInit() { }
}

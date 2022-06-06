import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: []
})
export class LoginComponent implements OnInit {
    user: any = {};
  
    constructor(
        public _router: Router
    ) { }
    ngOnInit() { }
}

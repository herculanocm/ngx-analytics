import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ThemeModule } from '../@theme/theme.module';
import { LoginComponent } from './login/login.component';

const IMPORTS = [
    CommonModule,
    FormsModule,
    ThemeModule,
    AuthRoutingModule,
];
const DECLARATIONS = [
    AuthComponent,
    LoginComponent,
];
const PROVIDERS = [];

@NgModule({
    imports: [...IMPORTS],
    declarations: [...DECLARATIONS],
    providers: [...PROVIDERS],
})
export class AuthModule {}
import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbAlertModule,
  NbPopoverModule,
  NbSearchModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { DadosPublicosComponent } from './dpublicos.component';
import { DadosPublicosRoutingModule } from './dpublicos-routing.module';
import { UploadComponent } from './upload/upload.component';
import { DadosPublicosService } from './dpublicos.service';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbPopoverModule,
    NbSearchModule,
    NbAlertModule,
    NgxEchartsModule,
    DadosPublicosRoutingModule
  ],
  declarations: [
    DadosPublicosComponent,
    UploadComponent,
  ],
  providers: [
    DadosPublicosService,
  ]
})
export class DadosPublicosModule { }

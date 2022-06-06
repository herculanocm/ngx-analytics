import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
    {
        path: '',
        component: UploadComponent,
        children: [
            { path: '', redirectTo: 'upload', pathMatch: 'full' },
            { path: 'upload', component: UploadComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class DadosPublicosRoutingModule { }

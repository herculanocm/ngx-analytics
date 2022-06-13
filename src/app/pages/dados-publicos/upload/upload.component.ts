import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuditUserUpload } from '../dpublicos-aux';
import { DadosPublicosService } from '../dpublicos.service';


@Component({
  selector: 'ngx-dados-publicos-upload',
  styleUrls: ['./upload.component.scss'],
  templateUrl: './upload.component.html',
})
export class UploadComponent implements OnDestroy, OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  auditUserUploads?: AuditUserUpload[];

  constructor(private http: HttpClient, private themeService: NbThemeService, private uploadService: DadosPublicosService, private spinner: NgxSpinnerService) {
    this.auditUserUploads = [];
  }
  ngOnInit(): void {
    this.getAll();
  }
  ngOnDestroy() { }

  selectFile(event: any): void {
    console.log(event);
    this.selectedFiles = event.target.files;
  }

  getAll(): void {
    this.uploadService.getAll()
    .subscribe((data) => {
      this.spinner.hide('fullSpinner');
      this.auditUserUploads = data;
    }, (error) => {
      this.spinner.hide('fullSpinner');
    });
  }

  upload(): void {
    this.spinner.show('fullSpinner');
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile).subscribe(
          (event: any) => {
            
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              console.log(event);
              // this.message = event.body.message;
              this.selectedFiles = null;
              this.getAll();
            }
          },
          (err: any) => {
            console.log(err);
            this.spinner.hide('fullSpinner');
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          });
      }
      this.selectedFiles = undefined;
    }
  }


}

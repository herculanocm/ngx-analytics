import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DadosPublicosService } from '../dpublicos.service';


@Component({
  selector: 'ngx-dados-publicos-upload',
  styleUrls: ['./upload.component.scss'],
  templateUrl: './upload.component.html',
})
export class UploadComponent implements OnDestroy {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;

  constructor(private http: HttpClient, private themeService: NbThemeService, private uploadService: DadosPublicosService) { }
  ngOnDestroy() { }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
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
              this.message = event.body.message;
              // this.fileInfos = this.uploadService.getFiles();
            }
          },
          (err: any) => {
            console.log(err);
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

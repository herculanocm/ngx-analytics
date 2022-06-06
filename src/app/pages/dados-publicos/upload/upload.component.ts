import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';


@Component({
  selector: 'ngx-dados-publicos-upload',
  styleUrls: ['./upload.component.scss'],
  templateUrl: './upload.component.html',
})
export class UploadComponent implements OnDestroy {
  constructor(private themeService: NbThemeService) { }
  ngOnDestroy() {}
}

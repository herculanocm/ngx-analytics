import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';


@Component({
  selector: 'ngx-dados-publicos',
  styleUrls: [],
  template: `
  <router-outlet></router-outlet>
`,
})
export class DadosPublicosComponent implements OnDestroy {
  constructor(private themeService: NbThemeService) { }
  ngOnDestroy() {}
}

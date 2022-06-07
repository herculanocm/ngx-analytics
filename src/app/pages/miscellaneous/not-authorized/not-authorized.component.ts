import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-not-authorized',
  styleUrls: ['./not-authorized.component.scss'],
  templateUrl: './not-authorized.component.html',
})
export class NotAuthorizedComponent {

  constructor(private menuService: NbMenuService) {
  }
  goToHome() {
    this.menuService.navigateHome();
  }
}

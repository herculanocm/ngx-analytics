import { HttpClient } from '@angular/common/http';
import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';


@Component({
  selector: 'ngx-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnDestroy {

  private alive = true;
  constructor(private themeService: NbThemeService,
              private _http: HttpClient) {

        this._http.get('http://localhost:3000/api/v1/hello')
        .subscribe((data) => {
          console.log(data);
        },(error) => {
          console.log(error);
        });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}

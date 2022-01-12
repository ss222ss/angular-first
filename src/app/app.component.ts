import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  yazi = 'merhaba hoşgeldiniz...';
  isim: string = 'Uzay';
  isChecked: boolean = true;
  isCheckedFalse: boolean = false;
  isCheckedTwoWay: boolean = true;
}

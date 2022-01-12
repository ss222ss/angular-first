import { Component } from '@angular/core';
import { Film } from './models/film.model';

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

  sehirler: string[] = ['Eskişehir', 'İzmir', 'Ankara', 'İstanbul'];

  filmler: Film[] = [
    new Film('Matrix 4', '', false),
    new Film('Dont Look Up', '', true),
    new Film('Yüzüklerin Efendisi', '', true),
  ];

  filter(): void {
    this.filmler = this.filmler.filter((x) => !x.izlendiMi);
    console.log('tiklandi');
  }
}

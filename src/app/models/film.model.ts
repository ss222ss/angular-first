/*
export class Film {
  filmAdi: string;
  afis: string;
  izlendiMi: boolean;

  constructor(filmAdi: string, afis:  string, izlendiMi: boolean) {
    this.filmAdi = filmAdi;
    this.afis = afis;
    this.izlendiMi = izlendiMi;
  }
}
*/

export class Film {
  // parametreler varsa √∂zelliklere gerek yok
  constructor(
    public ad: string,
    public afis?: string,
    public izlendiMi?: boolean
  ) {}
}

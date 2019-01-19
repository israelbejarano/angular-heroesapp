import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe, } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class HeroesService {
  heroesUrl = 'your firebase url to heroes.json';
  heroeUrl = 'your firebase url to heroes';
  constructor(private http: HttpClient) {

   }

  nuevoHeroe(heroe: Heroe) {

    const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.heroesUrl, body, {headers} ).pipe(
      map( res => {
        return res;
      })
    );
  }

  actualizarHeroe(heroe: Heroe, key$: string) {

    const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let url = `${this.heroeUrl}/${key$}.json`;
    return this.http.put(url, body, {headers} ).pipe(
      map( res => {
        return res;
      })
    );
  }

  getHeroe(key$: string) {
    let url = `${this.heroeUrl}/${key$}.json`;
    return this.http.get(url).pipe(map(res => {
      return res;
    }));
  }

  getHeroes() {
    return this.http.get(this.heroesUrl).pipe(map(res => {
      return res;
    }));
  }

  borrarHeroe(key$: string) {
    let url = `${this.heroeUrl}/${key$}.json`;
    return this.http.delete(url).pipe(map(res => {
      return res;
    }));
  }
}

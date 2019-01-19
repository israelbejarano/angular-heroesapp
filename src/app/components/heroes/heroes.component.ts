import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any;
  loading = true;

  constructor(private _heroesService: HeroesService) {
    this._heroesService.getHeroes().subscribe((data: any) => {
      console.log(data);
      this.heroes = data;
      this.loading = false;
    });
   }

  ngOnInit() {
  }

  borraHeroe(key$: string) {
    this._heroesService.borrarHeroe(key$).subscribe((data: any) => {
      console.log(data);
      if(data) {
        console.error(data);
      } else {
        delete this.heroes[key$];
      }
    });
  }

}

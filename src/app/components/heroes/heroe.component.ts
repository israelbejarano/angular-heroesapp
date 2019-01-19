import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroe.service';
import { Router, ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  private heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: ''
  }
  nuevo = false;
  id: string;

  constructor(private _heroesService: HeroesService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      parametros => {
        console.log(parametros);
        this.id = parametros['id'];
        if(this.id !== 'nuevo') {
          this._heroesService.getHeroe(this.id).subscribe((data: Heroe) => this.heroe = data);
        }
      });
   }

  ngOnInit() {
  }

  guardar() {
    if(this.id === 'nuevo') {
      this._heroesService.nuevoHeroe(this.heroe).subscribe(data => {
        console.log(data);
        this.router.navigate(['/heroe', data['name']]);
      }, error => console.log(error));
    } else {
      this._heroesService.actualizarHeroe(this.heroe, this.id).subscribe(data => {
        console.log(data);
      }, error => console.log(error));
    }
    console.log(this.heroe);
  }

  agregarNuevo(forma: NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);
    forma.reset({casa: 'Marvel'});
  }
}

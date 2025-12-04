import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-peliculas',
  imports: [FormsModule],
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css',
})
export class Peliculas {
  peliculas: string [] = [];
  nuevaPelicula: string= "";

  addPelicula(){
    if (this.nuevaPelicula && this.nuevaPelicula.trim()){
      this.peliculas.push(this.nuevaPelicula.trim());
      this.nuevaPelicula = "";
    }

  }


}

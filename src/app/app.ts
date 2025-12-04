import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Peliculas } from './components/peliculas/peliculas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Peliculas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly nombreProyecto = signal('Tutorial Angular');
  descripcion = "Actividad 2 de Angular";
  autor = "David Ramirez Griño"
}

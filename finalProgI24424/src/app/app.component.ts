import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AseguradoraComponent } from './componentes/aseguradora/aseguradora.component';
import { PolizaComponent } from './componentes/poliza/poliza.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PolizaComponent, AseguradoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finalProgI24424';
}

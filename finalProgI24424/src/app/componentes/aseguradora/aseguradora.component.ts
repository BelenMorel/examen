import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../serivicios/info-page.service';
import { aseguradora } from '../../modelos/aseguradora/aseguradora';
import { CommonModule } from '@angular/common';
import { PolizaComponent } from '../poliza/poliza.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-aseguradora',
  standalone: true,
  imports: [CommonModule, PolizaComponent, RouterModule],
  templateUrl: './aseguradora.component.html',
  styleUrl: './aseguradora.component.css'
})

export class AseguradoraComponent {

  constructor(private infoPageService:InfoPageService){}
  datos?: aseguradora;

 ngOnInit(): void {
  this.infoPageService.ObtenerDatos().subscribe((data: any)=>{
    this.datos=data;
    console.log(this.datos)
  })
 }

}

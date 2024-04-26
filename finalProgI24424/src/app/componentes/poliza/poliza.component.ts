import { Component } from '@angular/core';
import { InfoPageService } from '../../serivicios/info-page.service';
import { CommonModule } from '@angular/common';
import { poliza } from '../../modelos/polizas/poliza';
import { aseg } from '../../modelos/polizas/aseg';

@Component({
  selector: 'app-poliza',
  standalone: true,
  imports: [CommonModule
    
  ],
  templateUrl: './poliza.component.html',
  styleUrl: './poliza.component.css'
})
export class PolizaComponent {

  constructor(private infoPageService:InfoPageService){}

  datosPoliza?: aseg;

 ngOnInit(): void {
  this.infoPageService.ObtenerDatos().subscribe((data: any)=>{
    this.datosPoliza=data;
    console.log(this.datosPoliza)
  })
 }

}

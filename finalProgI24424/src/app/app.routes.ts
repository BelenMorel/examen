import { Routes } from '@angular/router';
import { AseguradoraComponent } from './componentes/aseguradora/aseguradora.component';
import { PolizaComponent } from './componentes/poliza/poliza.component';

export const routes: Routes = [
    {path: "polizas", component: PolizaComponent},
    // {path: "aseguradora", component: AseguradoraComponent},
    {path: "**", redirectTo: "/", pathMatch: 'full'}
];

import { objetosAsegurados } from "./objetosAsegurados"

export interface poliza{
             
                id: String,
                fecha: String,
                objetos_asegurados: objetosAsegurados[],
        
}
import { Ingreso } from "./ingreso.model";

export class IngresoService{
    ingresos:Ingreso[]=[
        new Ingreso("Salaro",45000),
        new Ingreso("Renta",500)
    ]

    eliminar(ingreso:Ingreso){
        const index:number=this.ingresos.indexOf(ingreso);
        this.ingresos.splice(index,1);
    }

    
  agregar(ingreso:Ingreso){
    this.ingresos.push(ingreso)
  }
}
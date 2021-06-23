import { Egreso } from './egreso.model';

export class EgresoService {
  egresos: Egreso[] = [new Egreso('Salaro', 4000), new Egreso('Renta', 500)];


  eliminar(egreso:Egreso){
    const index=this.egresos.indexOf(egreso);

    this.egresos.splice(index,1);
  }

  agregar(egreso:Egreso){
    this.egresos.push(egreso)
  }
}

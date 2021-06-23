import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egresos/egreso.model';
import { EgresoService } from '../egresos/egreso.service';
import { Ingreso } from '../ingresos/ingreso.model';
import { IngresoService } from '../ingresos/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  tipo: string = '+';
  descripcion: string = '';
  valor: number = 0;

  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService
  ) {}

  ngOnInit(): void {}

  agregar() {
    if (this.descripcion === '' || this.valor === 0 || this.tipo === '') {
      alert('completa los campos');
    } else {
      if (this.tipo === '+') {
        let ingreso: Ingreso = new Ingreso(this.descripcion, this.valor);
        this.ingresoService.agregar(ingreso);
        this.descripcion = '';
        this.valor = 0;
        this.tipo = '+';
      } else {
        let egreso: Egreso = new Egreso(this.descripcion, this.valor);
        this.egresoService.agregar(egreso);
        this.descripcion = '';
        this.valor = 0;
        this.tipo = '+';
      }
    }
  }
}

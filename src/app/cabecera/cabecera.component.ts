import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {


  @Input() presupuestoTotal:number=0;
  @Input() ingresoTotal:number=0;
  @Input() egresoTotal:number=0;

  constructor() { }

  ngOnInit(): void {
  }
 
}

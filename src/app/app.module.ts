import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadosComponent } from './listados/listados.component';
import { EgresosComponent } from './egresos/egresos.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresoService } from './egresos/egreso.service';
import { IngresoService } from './ingresos/ingreso.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FormularioComponent,
    ListadosComponent,
    EgresosComponent,
    IngresosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    EgresoService,
    IngresoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

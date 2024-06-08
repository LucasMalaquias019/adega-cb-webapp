import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { RouterModule } from '@angular/router';
import { ClienteRoutingModule } from './cliente-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component'
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CadastroClienteComponent,
    ListaClienteComponent,
    DetalheClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    ClienteRoutingModule,
    NgxMaskDirective,
    HttpClientModule 
  ],

  exports: [
    CadastroClienteComponent,
    ListaClienteComponent
  ],

  providers: [
    provideNgxMask({ /* opções de cfg */ }),
    ClienteService
  ]
})
export class ClienteModule { }

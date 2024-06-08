import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';


const routes: Routes = [
  { path: 'clientes', component: ListaClienteComponent },
  { path: 'cadastrar-cliente', component: CadastroClienteComponent },
  { path: 'editar-cliente/:id', component: DetalheClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './core/cliente/cadastro/cadastro.component';
import { ListaComponent } from './core/cliente/lista/lista.component';

const routes: Routes = [
  { path: '', component: ListaComponent },
  // { path: 'clientes', component: ClientesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

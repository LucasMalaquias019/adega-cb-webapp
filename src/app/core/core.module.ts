import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from '../core/cliente/cadastro/cadastro.component';
import { ListaComponent } from '../core/cliente/lista/lista.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { IconsModule } from 'src/assets/icons/icons.module';






@NgModule({
  declarations: [
    CadastroComponent,
    ListaComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    SweetAlert2Module,
    IconsModule
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../modulos/material/material.module';
import { MarcarItemComponent } from './components/marcar-item/marcar-item.component';
import { NgxMaskDirective } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    NavbarTopComponent,
    MarcarItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MaterialModule,
    NgxMaskDirective,
    FormsModule,
    CommonModule,
    ReactiveFormsModule


  ],
  exports: [NavbarTopComponent],
  providers: [],
  bootstrap: []
})
export class SharedModule { }


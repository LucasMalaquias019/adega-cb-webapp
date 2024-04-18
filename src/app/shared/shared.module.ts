import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { MatExpansionModule } from '@angular/material/expansion';

import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { IconsModule } from 'src/assets/icons/icons.module';




@NgModule({
  declarations: [
    NavbarTopComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatExpansionModule,
    MatButtonModule,
     IconsModule
  ],
  exports: [NavbarTopComponent],
  providers: [],
  bootstrap: []
})
export class SharedModule { }


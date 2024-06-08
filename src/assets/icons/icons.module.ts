import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Github, LogIn, Bell, Search, User, UserPlus, Edit, Trash2, ChevronRight, ChevronLeft, LogOut, Save, XCircle, Plus } from 'angular-feather/icons';

const icons = {
  Camera,
  Heart,
  Github,
  LogIn,
  LogOut,
  Bell,
  Search,
  User,
  UserPlus,
  Edit,
  Trash2,
  ChevronRight,
  ChevronLeft,
  Save,
  XCircle,
  Plus
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],

  exports: [
    FeatherModule
  ]

})
export class IconsModule { }

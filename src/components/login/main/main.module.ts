import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { RegisterComponent } from '../register/register.component';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp3Component } from './comp3/comp3.component';

import {FruitsModule} from '../fruits/fruits.module';


@NgModule({
  declarations: [
    Comp3Component,
    
  ],
  imports: [
    CommonModule,
    FruitsModule
  ],
  exports:[
    Comp3Component,
   
  ]
})
export class Fruits2Module { }

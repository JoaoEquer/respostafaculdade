import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import {Module1RoutingModule} from "./module1-routing.module";



@NgModule({
  declarations: [
    Child1Component
  ],
  imports: [
    CommonModule,
  ]
})
export class Module1Module { }

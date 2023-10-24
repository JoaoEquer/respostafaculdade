import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { AppRoutingModule } from './module1/app-routing.module'; // Importe o módulo principal
import { Module1RoutingModule } from './module1/module1-routing.module'; // Importe o módulo de roteamento do módulo 1
import { Module2RoutingModule } from './module2/module2-routing.module'; // Importe o módulo de roteamento do módulo 2

import { AppComponent } from './app.component';
import {Module2Module} from "./module2/module2.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Adicione o módulo de roteamento principal
    Module1RoutingModule, // Adicione o módulo de roteamento do módulo 1
    Module2RoutingModule,
    CommonModule,
    Module2Module// Adicione o módulo de roteamento do módulo 2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

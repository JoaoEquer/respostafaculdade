import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child2Component } from '../module2/child2/child2.component';

const routes: Routes = [
  { path: 'child2', component: Child2Component },
  // Defina outras rotas para este módulo aqui
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class Module2RoutingModule {
}

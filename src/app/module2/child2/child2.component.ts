import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  selection: string; // Declare a propriedade

  constructor() {
    // Inicialize a propriedade, se necessário
    this.selection = 'algum-valor-inicial';
  }
}


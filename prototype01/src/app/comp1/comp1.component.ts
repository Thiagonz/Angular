import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styles: []
})
export class Comp1Component implements OnInit {

  value = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addVal() {
    this.value++;
  }

  remVal() {
    this.value--;
  }

  valueEmittedFromChildComponent: string = '';

  parrentEventHandlerFunction(valueEmitted){
      this.valueEmittedFromChildComponent = valueEmitted;
  }


}

import { Component, Input, OnInit, SimpleChanges, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-comp1child',
  templateUrl: './comp1child.component.html',
  styles: []
})
export class Comp1childComponent implements OnInit {

  @Input() value;

  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }  

  addVal(){
    this.buttonClicked.emit('acrescenta valor ++');
  }

  remVal(){
    this.buttonClicked.emit('decrementa valor --');
  }
  

}

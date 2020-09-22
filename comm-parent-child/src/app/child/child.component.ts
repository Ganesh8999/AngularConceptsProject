import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h3> Child Counter {{cntr}}</h3>
    <button class="btn btn-primary" (click)="justClicked()"> Child button </button>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() buttonClick = new EventEmitter();
  cntr = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => { this.cntr++ }, 1000)

  }


  justClicked() {
    this.buttonClick.emit(this.cntr);
    console.log("justClicked");
  }

}

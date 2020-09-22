import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
      <div *ngIf="counter">
              <h1>Parent component counter</h1>
              <h3>You set the parent's counter to: {{counter}}</h3>
      </div>
      <app-child (buttonClick)="handleChildButtonClick($event)"></app-child>  
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  counter;

  constructor() { }

  ngOnInit() {
  }


  handleChildButtonClick(value) {

    this.counter = value;

  }

}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-child",
  template: `
    <div *ngIf="stopped">
      <h1>Congratulations!</h1>
      <h3>You stopped the child component's counter!</h3>
    </div>
    <h3>Child Counter: {{ counter }}</h3>
  `,
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit {
  private stopped = false;
  private counter = 0;
  private intervalId;

  constructor() {}

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.stopped = true;
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  template: `<app-child #child></app-child>

    <button class="btn btn-primary" (click)="child.stopTimer()">
      Stop Timer !
    </button> `,
  styleUrls: ["./parent.component.css"],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

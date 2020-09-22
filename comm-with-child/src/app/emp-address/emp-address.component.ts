import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-emp-address',
  template: '<span>{{address.address}}, {{address.city}}, {{address.country}}</span>',
  styleUrls: ['./emp-address.component.css']
})
export class EmpAddressComponent implements OnInit {

  @Input() address;

  constructor() { }

  ngOnInit() {
  }



}

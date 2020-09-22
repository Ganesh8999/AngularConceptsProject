import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  event = { name: "Ganesh Singh", company: "IBM", dob: "07/06/1996", location: { city: "Banglore", pin: "560045", country: "India" } }

}

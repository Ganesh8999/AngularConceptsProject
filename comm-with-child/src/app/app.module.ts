import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { EmpAddressComponent } from './emp-address/emp-address.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDetailsComponent,
    EmpAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

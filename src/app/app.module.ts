import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorchangeDirective } from './colorchange.directive';
import { PancardDirective } from './pancard.directive';
import { AadharDirective } from './aadhar.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorchangeDirective,
    PancardDirective,
    AadharDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

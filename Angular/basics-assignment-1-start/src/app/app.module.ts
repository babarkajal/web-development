import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WarningAlert } from './WarningAlert/warning-alert';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
	WarningAlert,
 SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

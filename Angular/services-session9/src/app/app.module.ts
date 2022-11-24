import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoggingServices } from './logging.service';

@NgModule({
  declarations: [AppComponent, AccountComponent, NewAccountComponent],
  imports: [BrowserModule, FormsModule],
  providers: [LoggingServices],
  bootstrap: [AppComponent],
})
export class AppModule {}

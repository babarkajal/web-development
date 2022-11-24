import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms"
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightTextDirective } from './highlight-text.directive'
@NgModule({
  declarations: [
    AppComponent,
	ServerComponent,
 	ServersComponent,
	DirectivesComponent,
	HighlightTextDirective
  ],
  imports: [
    BrowserModule,
	FormsModule
    // AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

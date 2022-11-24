import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HighlightNamesDirective } from './highlight-names.directive';
import { HighlightNamesBetterDirective } from './highlight-names-better.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightNamesDirective,
    HighlightNamesBetterDirective,
    UnlessDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

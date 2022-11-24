import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'recipe-udemy';
  feature: string = 'recipe';

  onNavigate(feature: string) {
    this.feature = feature;
  }
}

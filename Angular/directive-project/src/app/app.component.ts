import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';
import { image } from './image.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showElementFlag: boolean = false;
  ninjaNames = [
    'Sakura',
    'Sasuke',
    'Lee',
    'Shikamaru',
    'Hinata',
    'Shino',
    'Neji',
  ];
  naruto = image;
  showElement() {
    this.showElementFlag = !this.showElementFlag;
  }

  /*   
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('click') hover(e: Event) {
    console.log(this.renderer, this.el, e);
  } 
  */

  /**
   **We can also listen key down event using window object
   */
  @HostListener('window:keydown.enter') enter() {
    alert('Enter key pressed');
  }
}

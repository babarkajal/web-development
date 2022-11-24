import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredients } from '../ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef = { nativeElement: null };
  @ViewChild('amountInput') amount: ElementRef = { nativeElement: null };
  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem() {
    const name = this.name.nativeElement.value;
    const amount = this.amount.nativeElement.value;
    // this.addIngredients.emit(new Ingredients(name, amount));
    this.shoppingService.addIngredients(new Ingredients(name, amount));
  }
}

import { Component, OnInit } from '@angular/core';
import { Ingredients } from './ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  /*   ingredients=[
	new Ingredients("Oil",20),
	new Ingredients("Panner",20)
  ]; */
  ingredients: Ingredients[];

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientAdd.subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }
}

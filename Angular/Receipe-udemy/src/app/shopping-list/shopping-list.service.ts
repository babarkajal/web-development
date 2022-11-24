import { EventEmitter } from '@angular/core';
import { Ingredients } from './ingredients.model';

export class ShoppingListService {
  ingredientAdd = new EventEmitter<Ingredients[]>();
  ingredients = [new Ingredients('Oil', 20), new Ingredients('Panner', 20)];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientAdd.emit(this.ingredients.slice());
  }

  addRecipeIngredients(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingredientAdd.emit(this.ingredients);
  }
}

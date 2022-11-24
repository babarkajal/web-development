import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shopping-list/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe 1',
      'This is simple test 1',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F20%2F212721-Indian-Chicken-Curry-Murgh-Kari-mfs_004.jpg',
      [new Ingredients('Burger', 10), new Ingredients('French Fries', 20)]
    ),
    new Recipe(
      'Test recipe 2',
      'This is simple test 2',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F20%2F212721-Indian-Chicken-Curry-Murgh-Kari-mfs_004.jpg',
      [new Ingredients('Pizza', 10), new Ingredients('Momos', 20)]
    ),
    new Recipe(
      'Test recipe 3',
      'This is simple test 3',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F20%2F212721-Indian-Chicken-Curry-Murgh-Kari-mfs_004.jpg',
      [new Ingredients('Pizza', 10), new Ingredients('Momos', 20)]
    ),
  ];

  constructor(private shoppingService: ShoppingListService) {}
  getRecipe() {
    return this.recipes.slice();
  }

  addIngredients(ingredients: Ingredients[]) {
    this.shoppingService.addRecipeIngredients(ingredients);
  }
}

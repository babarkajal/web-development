import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipe-component',
  templateUrl: './recipes.component.html',
})
export class RecipeComponent {
  selectedRecipe: Recipe = { name: '', imagePath: '', description: '' };
  constructor(private recipeServices: RecipeService) {}

  ngOnInit() {
    this.recipeServices.recipeSelected.subscribe((recipe) => {
      this.selectedRecipe = recipe;
    });
  }
  /**removed when services are added 
  onSelectRecipe(recipe: Recipe) {
		this.selectedRecipe = recipe;
	} */
}

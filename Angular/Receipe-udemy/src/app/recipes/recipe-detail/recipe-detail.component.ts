import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe = {
    name: '',
    description: '',
    imagePath: '',
  };

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  addInToShoppingList() {
    this.recipeService.addIngredients(this.selectedRecipe.ingredients);
  }
}

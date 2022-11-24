import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  //create array of recipes
  /**
   **This is removed after adding services 	
	recipes:Recipe[]= [
			new Recipe('Test recipe', "This is simple test",'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F20%2F212721-Indian-Chicken-Curry-Murgh-Kari-mfs_004.jpg'),
			new Recipe('Test recipe', "This is simple test",'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F20%2F212721-Indian-Chicken-Curry-Murgh-Kari-mfs_004.jpg'),
			new Recipe('Test recipe', "This is simple test",'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F20%2F212721-Indian-Chicken-Curry-Murgh-Kari-mfs_004.jpg')
			
		];  
		@Output() onSelectRecipe = new EventEmitter<Recipe>();
	*/

  recipes: Recipe[];
  constructor(private recService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recService.getRecipe();
  }

  selectedRecipe(recipe: Recipe) {
    // this.onSelectRecipe.emit(recipe);
    this.recService.recipeSelected.emit(recipe);
  }
}

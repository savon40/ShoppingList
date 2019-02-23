import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService] //all children of Recipe component can access this, but not ShoppingLIst
})
export class RecipesComponent implements OnInit {

  // recipes : Recipe[];
  // selectedRecipe: Recipe;
  // private recipeService: RecipeService
  constructor() { }

  ngOnInit() {
    // this.recipes = this.recipeService.getRecipes();

    //get informed about any changes to recipeSelected
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe; //when recipe changes, set it to selected recipe
    //   }
    // ); 
  }

}

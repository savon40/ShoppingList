import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() //not receiving this value anymore - we get it through the url
  recipe: Recipe; 
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id']; 
    // - because recipe detail is on the same page as recipe list, we need to react to changes to id, so we cant use snapshot

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route}); //this is better

    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route}); //this is worse
  }

  onAddToShoppingList() {
    //pass recipe ingredients to recipe service
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}

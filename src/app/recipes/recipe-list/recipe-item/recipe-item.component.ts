import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe; //@Input means it comes from another component
  // @Output() recipeSelected = new EventEmitter<void>(); //not using this anymore

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
                        
  onSelected() {
    // instead of all of this property binding and event emitting, we will use service to 
    // send data across components

    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);

  }

}

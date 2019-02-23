import {Ingredient} from '../shared/ingredient.model';
// import {EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    // ingredientsChanged = new EventEmitter<Ingredient[]>(); //were using event emitter to inform componeonts of changes
    ingredientsChanged = new Subject<Ingredient[]>(); //better to use Subject


    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        //we use slice to get a copy not the original
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice()); //next instead of emit because change to subject
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients); //this 'spreads' our ingredients into list of ingredients that can be added
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
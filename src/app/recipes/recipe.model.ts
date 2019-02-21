// model is a blueprint for objects we create - similar to model in rails

import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[]; //recipe has array of ingredients

    constructor(name: string, desc: string, ip: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = ip;
        this.ingredients = ingredients;
    }
}
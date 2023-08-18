import {  EventEmitter } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Carrot', 2),
    ];
    ingredientChanged = new EventEmitter<Ingredient[]>();
  

    getIngredients() {
        return this.ingredients.slice();
    }
    onIngridientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice())
    }

}
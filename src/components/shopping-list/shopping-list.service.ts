import { Subject } from "rxjs";
import { Ingredient } from "src/app/shared/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Carrot', 2),
    ];
    ingredientChanged = new Subject<Ingredient[]>();
  

    getIngredients() {
        return this.ingredients.slice();
    }
    onIngridientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice())
    }
    onIngridientDeleted(ingredient: Ingredient) {
       
    }
    addIngredients(ingredients: Ingredient[] | undefined) {
        if(ingredients) {
            this.ingredients.push(...ingredients);
            this.ingredientChanged.next(this.ingredients.slice())
        }
        return 
    }

}
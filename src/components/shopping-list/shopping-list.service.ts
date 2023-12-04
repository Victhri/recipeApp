import { Subject } from "rxjs";
import { Ingredient } from "src/app/shared/models/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [];
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
  

    getIngredients() {
        console.log(this.ingredients);
        
        return this.ingredients.slice();
    }
    getIngredient(index: number) {
        return this.ingredients[index];
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

    updateIngredients(index: number, newIngredient: Ingredient) {
      this.ingredients[index] = newIngredient;
      this.ingredientChanged.next(this.ingredients.slice())
    }
    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice())
    }
}
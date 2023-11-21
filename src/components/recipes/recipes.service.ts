import { Injectable } from "@angular/core";
import { Recipe } from "../../app/shared/models/recipe.model";
import { Ingredient } from "src/app/shared/models/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipesService {
  recipeChanged= new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {

  }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(alias: string) {
    return this.recipes.find((recipe) => {return recipe.alias === alias});
  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice())
  }
  addIngrsToShopList(ingredients: Ingredient[] | undefined) {
    this.slService.addIngredients(ingredients)
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice())
  }
  updateRecipe(alias: string, newRecipe: Recipe) {
    const index = this.recipes.findIndex(recipe => recipe.alias === alias);
    if (index !== -1) {
      this.recipes[index] = newRecipe;
      this.recipeChanged.next(this.recipes.slice());
    } else {
      console.log(`Recipe with alias '${alias}' not found.`);
    }
  }

  deleteRecipe(alias: string) {
    const index = this.recipes.findIndex(recipe => recipe.alias === alias);
    if (index !== -1) {
      this.recipes.splice(index, 1);
      this.recipeChanged.next(this.recipes.slice());
    } else {
      console.log(`Recipe with alias '${alias}' not found.`);
    }   
  }

}
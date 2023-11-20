import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipesService {
  recipeChanged= new Subject<Recipe[]>();
  private recipes: Recipe[] = [
      new Recipe(
        'chorizo-and-mozarella',
        'Chorizo & mozzarella gnocchi bake',
        'Upgrade cheesy tomato pasta with gnocchi, chorizo and mozzarella for a comforting bake that makes an excellent midweek meal',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400',
        [new Ingredient('Chorizo', 1), new Ingredient('Mozzarella', 4)]
      ),
      new Recipe(
        'chocolate-fudge-cake',
        'Chocolate fudge cake',
        'Need a guaranteed crowd-pleasing cake thats easy to make? This super-squidgy chocolate fudge cake with smooth icing is an instant baking win',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chocolate-fudge-cake-91de17a.jpg?quality=90&webp=true&resize=220,200',
        [new Ingredient('Flour', 1), new Ingredient('Chocolate', 4)]
      ),
  ];

  constructor(private slService: ShoppingListService) {

  }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(alias: string) {
    return this.recipes.find((recipe) => {return recipe.alias === alias});
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
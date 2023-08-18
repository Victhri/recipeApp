import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
      new Recipe(
        'Chorizo & mozzarella gnocchi bake',
        'Upgrade cheesy tomato pasta with gnocchi, chorizo and mozzarella for a comforting bake that makes an excellent midweek meal',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=440,400'
      ),
      new Recipe(
        'Chocolate fudge cake',
        'Need a guaranteed crowd-pleasing cake thats easy to make? This super-squidgy chocolate fudge cake with smooth icing is an instant baking win',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chocolate-fudge-cake-91de17a.jpg?quality=90&webp=true&resize=220,200'
      ),
  ];
  getRecipes() {
      return this.recipes.slice();
  }

}
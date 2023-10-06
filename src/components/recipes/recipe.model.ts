import { Ingredient } from "src/app/shared/ingredient.model";

export class Recipe {
  public alias?: string;
  public name?: string;
  public description?: string;
  public imagePath?: string;
  public ingredients?: Ingredient[];
  constructor(alias: string, name: string, description: string, imagePath: string, ingredients: Ingredient[] ) {
    this.alias = alias;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}

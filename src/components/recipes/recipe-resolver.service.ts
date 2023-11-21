import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "src/app/shared/models/recipe.model";
import { StoreDataService } from "src/app/shared/store-data.service";
import { RecipesService } from "./recipes.service";

@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe[]> {
    constructor(private storeDataService: StoreDataService, private recipesService: RecipesService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const recipes = this.recipesService.getRecipes();
        if(recipes.length === 0) {
            return this.storeDataService.fetchRecipes();
        } else {
            return recipes;
        }
        
    }
}
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipesService } from "src/components/recipes/recipes.service";
import { Recipe } from "./models/recipe.model";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "src/components/auth/auth.service";

@Injectable({providedIn: 'root'})
export class StoreDataService  {
    constructor(
        private http: HttpClient, 
        private recipesService: RecipesService, 
        private authService: AuthService
    ) { }
    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        this.http.put('https://recipe-book-6de0a-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes)
            .subscribe(response => console.log(response)
        )
    }

    fetchRecipes() {
        
        return this.http.get<Recipe[]>(
            'https://recipe-book-6de0a-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
        ).pipe(
            map(response => {
                return response.map(recipe => {
                    return { 
                        ...recipe, 
                        ingredients: recipe.ingredients ? recipe.ingredients : []
                    }
                })
            }),
            tap(response => this.recipesService.setRecipes(response))
        )}
    }
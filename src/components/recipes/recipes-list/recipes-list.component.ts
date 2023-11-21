import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../../../app/shared/models/recipe.model';
import { RecipesService } from '../recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit, OnDestroy{
  recipes: Recipe[] = []; 
  subscription: Subscription | undefined;
  constructor(private RecipesService: RecipesService) {

  }
  ngOnInit() {
    this.subscription = this.RecipesService.recipeChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    })
    this.recipes = this.RecipesService.getRecipes();
    console.log(this.recipes);
        
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}

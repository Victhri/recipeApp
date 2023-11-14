import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit{
  recipes: Recipe[] = []; 
  constructor(private RecipesService: RecipesService) {

  }
  ngOnInit() {
    this.RecipesService.recipeChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    })
    this.recipes = this.RecipesService.getRecipes();
    console.log(this.recipes);
    
  }
}

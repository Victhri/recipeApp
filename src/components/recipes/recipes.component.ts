import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipesService],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe | undefined;

  constructor(private RecipesService: RecipesService) {
  }
  ngOnInit() {
    this.RecipesService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe
    })
  }
  
}

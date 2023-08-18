import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

import { RecipesService } from '../../recipes.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  constructor(private RecipesService: RecipesService) {}
  @Input() recipe: Recipe = {
    name: 'No title',
    description: 'No descroprion',
    imagePath: 'No img',
  };
  onSelected() {
    this.RecipesService.recipeSelected.emit(this.recipe);
  }
}

import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss'],
})
export class RecipesDetailsComponent {
  @Input() recipe: Recipe | undefined;
  constructor(private recipeService: RecipesService) {}
  onAddToShoppingList() {
    this.recipeService.addIngrsToShopList(this.recipe?.ingredients)
  }
}

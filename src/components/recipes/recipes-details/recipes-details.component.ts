import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss'],
})
export class RecipesDetailsComponent implements OnInit{
  recipe: Recipe | undefined;
  constructor(private recipeService: RecipesService, private router: ActivatedRoute) {}
  onAddToShoppingList() {
    this.recipeService.addIngrsToShopList(this.recipe?.ingredients)
  }
  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipe(params['title']);
    })
  }

}



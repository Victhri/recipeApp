import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss'],
})
export class RecipesDetailsComponent implements OnInit{
  recipe: Recipe | any;
  constructor(private recipeService: RecipesService, private route: ActivatedRoute, private router: Router) {}
  onAddToShoppingList() {
    this.recipeService.addIngrsToShopList(this.recipe?.ingredients)
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipe(params['title']);
    })
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe?.alias)
    this.router.navigate(['/recipes']);
  }

}



import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss'],
})
export class RecipesDetailsComponent implements OnInit{
  @Input() recipe: Recipe | undefined;
  constructor(private recipeService: RecipesService, private router: ActivatedRoute) {}
  onAddToShoppingList() {
    this.recipeService.addIngrsToShopList(this.recipe?.ingredients)
  }
  ngOnInit() {
    const alias = this.router.snapshot.params['title'];
    this.recipe = this.recipeService.getRecipe(alias);
    
  }

}

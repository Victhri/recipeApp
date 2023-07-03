import { NgModule } from '@angular/core';

import { RecipesComponent } from './recipes.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [
    RecipesComponent,
    RecipeItemComponent,
    RecipesDetailsComponent,
    RecipesListComponent,
  ],
  declarations: [
    RecipesComponent,
    RecipeItemComponent,
    RecipesDetailsComponent,
    RecipesListComponent,
  ],
  providers: [],
})
export class RecipeModule {}

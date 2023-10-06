import { NgModule } from '@angular/core';

import { RecipesComponent } from './recipes.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from 'src/app/shared/directives.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, DirectivesModule, RouterModule],
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

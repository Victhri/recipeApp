import { NgModule } from '@angular/core';

import { RecipesComponent } from './recipes.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from 'src/app/shared/directives.module';
import { RouterModule } from '@angular/router';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

@NgModule({
  imports: [CommonModule, DirectivesModule, RouterModule],
  exports: [
    RecipesStartComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipesDetailsComponent,
    RecipesListComponent,
    RecipeEditComponent
  ],
  declarations: [
    RecipesStartComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipesDetailsComponent,
    RecipesListComponent,
    RecipeEditComponent,
    RecipeEditComponent
  ],
  providers: [],
})
export class RecipeModule {}

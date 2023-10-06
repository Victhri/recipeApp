import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from 'src/components/header/header.module';
import { RecipeModule } from 'src/components/recipes/recipies.module';
import { ShoppingListModule } from 'src/components/shopping-list/shopping-list.module';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from 'src/components/shopping-list/shopping-list.service';
import { RecipesListComponent } from 'src/components/recipes/recipes-list/recipes-list.component';
import { RecipesComponent } from 'src/components/recipes/recipes.component';
import { ShoppingListComponent } from 'src/components/shopping-list/shopping-list.component';
import { RecipesService } from 'src/components/recipes/recipes.service';
import { RecipesDetailsComponent } from 'src/components/recipes/recipes-details/recipes-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RecipesListComponent
  },
  {
    path: 'recipes',
    component: RecipesListComponent
  },
  {
    path: 'recipes/:title',
    component: RecipesDetailsComponent
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },

];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    RecipeModule,
    ShoppingListModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoppingListService, RecipesService],
  bootstrap: [AppComponent],
})
export class AppModule {}

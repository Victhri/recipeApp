import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from 'src/components/auth/auth.component';
import { HomePageComponent } from 'src/components/home-page/home-page.component';
import { RecipeEditComponent } from 'src/components/recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from 'src/components/recipes/recipe-resolver.service';
import { RecipesDetailsComponent } from 'src/components/recipes/recipes-details/recipes-details.component';
import { RecipesStartComponent } from 'src/components/recipes/recipes-start/recipes-start.component';
import { RecipesComponent } from 'src/components/recipes/recipes.component';
import { ShoppingListComponent } from 'src/components/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipesStartComponent
      },
      {
        path: 'new',
        component: RecipeEditComponent
      },
      {
        path: ':title',
        component: RecipesDetailsComponent,
        resolve: [RecipeResolverService]
      },
      {
        path: ':title/edit',
        component: RecipeEditComponent,
        resolve: [RecipeResolverService]
      },
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

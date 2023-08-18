import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from 'src/components/header/header.module';
import { RecipeModule } from 'src/components/recipes/recipies.module';
import { ShoppingListModule } from 'src/components/shopping-list/shopping-list.module';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from 'src/components/shopping-list/shopping-list.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    RecipeModule,
    ShoppingListModule,
    CommonModule,
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}

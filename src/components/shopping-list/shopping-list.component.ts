import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[] = [];
  private shopingListSubscription: Subscription | any;
  constructor(private ShoppingListService: ShoppingListService) {}
  ngOnInit() {
    this.ingredients = this.ShoppingListService.getIngredients(); 
    this.shopingListSubscription = this.ShoppingListService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy(): void {
    this.shopingListSubscription.unsubscribe();
  }
  
}

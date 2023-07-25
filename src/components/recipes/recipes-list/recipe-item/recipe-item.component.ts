import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  constructor() {}
  @Input() recipe: Recipe = {
    name: 'No title',
    description: 'No descroprion',
    imagePath: 'No img',
  };
  @Output() selectedRecipe = new EventEmitter<void>();
  onSelected() {
    this.selectedRecipe.emit();
  }
}

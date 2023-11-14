import {
  Component, OnInit, OnDestroy, ViewChild

} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm | any;
  subscription:  Subscription | undefined;
  editMode = false;
  editedItemIndex: number = 0;
  editedItem: Ingredient | null = null;
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngridient = new Ingredient(value.name, value.amount);
    (this.editMode) ? this.ShoppingListService.updateIngredients(this.editedItemIndex, newIngridient) :  this.ShoppingListService.onIngridientAdded(newIngridient);
    this.editMode = false;
    this.slForm.reset();
  }
  ngOnInit(): void {
    this.subscription = this.ShoppingListService.startedEditing.subscribe((index : number)=> {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.ShoppingListService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    });
  }
  onDelete(){
    this.ShoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  constructor(private ShoppingListService: ShoppingListService) {}
}

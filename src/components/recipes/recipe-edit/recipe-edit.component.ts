import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipesService } from '../recipes.service';
import { Recipe } from '../../../app/shared/models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent  implements OnInit{
  title: string | any;
  editMode= false;
  recipeForm!: FormGroup | any;

  constructor(private route: ActivatedRoute, private RecipetServise: RecipesService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>  {
      this.title = params['title']
      this.editMode = params['title'] != null;
      this.initForm()
    })
  }
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  private initForm() {
    let alias: string| undefined = ''
    let name: string| undefined = '';
    let imagePath: string| undefined = '';
    let description:  string| undefined = '';
    let recipeIngredients:any = new FormArray([]);
    
    if(this.editMode) {
      const recipe = this.RecipetServise.getRecipe(this.title);
      alias = recipe?.alias
      name = recipe?.name;
      imagePath = recipe?.imagePath;
      description = recipe?.description;
      if(recipe?.ingredients?.length) {
        for(let ingredient of recipe.ingredients) {
            recipeIngredients.push(new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [ Validators.required, Validators.pattern(/^(0|\+?[1-9]\d*)$/)])
            })
          );
        }
      }
    }
    this.recipeForm= new FormGroup({
      'alias': new FormControl(alias, Validators.required),
      'name' : new FormControl(name, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': recipeIngredients
    })
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^(0|\+?[1-9]\d*)$/)])
      })
    )
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }

  onSubmit() {
    if(this.editMode){
      this.RecipetServise.updateRecipe(this.title, this.recipeForm.value)
    } else {
      this.RecipetServise.addRecipe(this.recipeForm.value);
    }
    this.onCancel()
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }
}

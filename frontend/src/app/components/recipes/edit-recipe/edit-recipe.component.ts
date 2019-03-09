import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component/base-component';
import { ApiClientService } from 'src/app/shared/services/api-client.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Recipe, recipeProps } from 'src/app/models/recipe';
import { apiPathConstants } from 'src/app/shared/constants/api-path-constants';
import { FormsControlGroup } from 'src/app/shared/forms/form-control-group';
import { routeConstants } from 'src/app/routes/route-constants';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss'],
})
export class EditRecipeComponent extends BaseComponent implements OnInit {
  recipe: Recipe = {
    id: '',
    createdDate: '',
    modifiedDate: '',
    title: '',
    description: '',
    previousVersions: []
  };

  recipeProps = recipeProps;
  currentRecipeId: any;
  isNew: boolean;
  editRecipeForm: FormGroup;

  constructor(injector: Injector, private apiClientService: ApiClientService, private activatedRoute: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.currentRecipeId = this.activatedRoute.snapshot.params.id;
    this.isNew = !this.currentRecipeId;

    if (!this.isNew) {
      this.apiClientService.get<Recipe>(apiPathConstants.recipe + this.currentRecipeId).subscribe(recipeResponse => {
        this.recipe = recipeResponse;
        this.editRecipeForm = this.createEditRecipeForm(this.recipe);
      });
    } else {
      this.editRecipeForm = this.createEditRecipeForm(this.recipe);
    }
  }

  submit() {
    let recipe: Recipe = {
      id: this.recipe.id,
      createdDate: this.editRecipeForm.value.createdDate,
      modifiedDate: this.editRecipeForm.value.modifiedDate,
      title: this.editRecipeForm.value.title,
      description: this.editRecipeForm.value.description,
      previousVersions: this.recipe.previousVersions,
    };

    this.isNew ? this.createRecipe(recipe) : this.updateRecipe(recipe);
  }

  goBack() {
    this.back();
  }

  private createRecipe(recipe: Recipe) {
    this.apiClientService.post(apiPathConstants.recipes, recipe).subscribe(() => {
      this.navigate(routeConstants.recipes);
    });
  }

  private updateRecipe(recipe: Recipe) {
    this.apiClientService.put(apiPathConstants.recipes, recipe).subscribe(() => {
      this.navigate(routeConstants.recipes);
    });
  }

  private createEditRecipeForm(recipe: Recipe) {
    const group: FormsControlGroup = {};

    group[recipeProps.title] = new FormControl(recipe.title, [Validators.required, Validators.maxLength(50)]);
    group[recipeProps.description] = new FormControl(recipe.description, [Validators.required, Validators.maxLength(500)]);
    let formGroup = new FormGroup(group);

    return formGroup;
  }
}

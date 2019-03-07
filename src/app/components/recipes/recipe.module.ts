import { NgModule } from '@angular/core';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SharedModule } from 'src/app/shared/shared-module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditRecipeComponent, RecipeListComponent, RecipeComponent],
  imports: [SharedModule, ReactiveFormsModule],
  exports: [],
})
export class RecipeModule {}

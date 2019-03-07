import { Routes } from '@angular/router';
import { routeConstants } from './route-constants';
import { RecipeListComponent } from '../components/recipes/recipe-list/recipe-list.component';
import { EditRecipeComponent } from '../components/recipes/edit-recipe/edit-recipe.component';

export const routes: Routes = [
  { path: routeConstants.root, redirectTo: routeConstants.recipes, pathMatch: 'full' },
  { path: routeConstants.recipes, component: RecipeListComponent, pathMatch: 'full' },
  { path: routeConstants.editRecipe, component: EditRecipeComponent, pathMatch: 'full' },
  { path: routeConstants.editRecipeWithId, component: EditRecipeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: routeConstants.recipes, pathMatch: 'full' },
];

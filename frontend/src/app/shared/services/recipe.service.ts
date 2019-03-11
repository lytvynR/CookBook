import { Injectable } from '@angular/core';
import { ApiClientService } from './api-client.service';
import { Recipe } from 'src/app/models/recipe';
import { apiPathConstants } from '../constants/api-path-constants';
import { Observable } from 'rxjs';
import { SharedModule } from '../shared-module';

@Injectable({
  providedIn: SharedModule,
})
export class RecipeService {
  constructor(private apiClientService: ApiClientService) {}

  getAllRecipes(): Observable<Recipe[]> {
    return this.apiClientService.get<Recipe[]>(apiPathConstants.recipes);
  }

  getOneRecipe(recipeId: string): Observable<Recipe> {
    return this.apiClientService.get<Recipe>(apiPathConstants.recipe + recipeId);
  }

  createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.apiClientService.post(apiPathConstants.recipes, recipe);
  }

  updateRecipe(recipe: Recipe): Observable<void> {
    return this.apiClientService.put(`${apiPathConstants.recipes}/${recipe.id}`, recipe);
  }

  deleteRecipe(recipeId: string): Observable<void> {
    return this.apiClientService.delete(`${apiPathConstants.recipe}/${recipeId}`);
  }
}

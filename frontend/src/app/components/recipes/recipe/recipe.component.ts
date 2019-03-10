import { Component, OnInit, Input, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component/base-component';
import { Recipe } from 'src/app/models/recipe';
import { routeConstants } from 'src/app/routes/route-constants';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent extends BaseComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(injector: Injector) {
    super(injector);
  }

  editRecipe(recipeId: string) {
    this.navigate(routeConstants.editRecipe, recipeId);
  }

  goToRecipeHistory(recipeId: string) {
    this.navigateWithQueryParams(routeConstants.recipeHistory, { queryParams: { recipeId } });
  }

  ngOnInit() {}
}

import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component/base-component';
import { Recipe, recipeProps } from 'src/app/models/recipe';
import { routeConstants } from 'src/app/routes/route-constants';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent extends BaseComponent implements OnInit {
  recipes: Recipe[] = [];
  recipeProps = recipeProps;

  constructor(injector: Injector, private recipeService: RecipeService) {
    super(injector);
  }

  ngOnInit() {
    this.recipeService.getAllRecipes().subscribe(res => {
      this.recipes = res;
    });
  }

  addRecipe() {
    this.navigate(routeConstants.editRecipe);
  }

  editRecipe(recipeId: string) {
    this.navigate(routeConstants.editRecipe, recipeId);
  }
}

import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component/base-component';
import { ApiClientService } from 'src/app/shared/services/api-client.service';
import { Recipe, recipeProps } from 'src/app/models/recipe';
import { apiPathConstants } from 'src/app/shared/constants/api-path-constants';
import { routeConstants } from 'src/app/routes/route-constants';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent extends BaseComponent implements OnInit {
  recipes: Recipe[] = [];
  recipeProps = recipeProps;

  constructor(injector: Injector, private apiClientService: ApiClientService) {
    super(injector);
  }

  ngOnInit() {
    this.apiClientService.get<Recipe[]>(apiPathConstants.recipes).subscribe(res => {
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

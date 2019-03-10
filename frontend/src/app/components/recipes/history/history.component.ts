import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from 'src/app/shared/services/api-client.service';
import { RecipeChange } from 'src/app/models/recipe-change';
import { Recipe } from 'src/app/models/recipe';
import { apiPathConstants } from 'src/app/shared/constants/api-path-constants';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  currentRecipeId: string;
  recipeChanges: RecipeChange[] = [];

  private recipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private apiClientService: ApiClientService) {}

  ngOnInit() {
    this.currentRecipeId = this.activatedRoute.snapshot.queryParams.recipeId;
    this.apiClientService.get<Recipe>(apiPathConstants.recipe + this.currentRecipeId).subscribe(recipe => {
      this.recipe = recipe;
      this.recipeChanges = this.buildFullRecipeHistory(this.recipe);
    });
  }

  private buildFullRecipeHistory(recipe: Recipe) {
    let changes: RecipeChange[] = [];
    let versions = recipe.previousVersions;

    for (let i = 0; i < versions.length; i++) {
      let recipeChange: RecipeChange = {
        modifiedDate: versions[i].modifiedDate,
        description: versions[i].description,
        prevDescription: '',
        title: versions[i].title,
        prevTitle: '',
      };

      if (i !== 0) {
        recipeChange.prevDescription = versions[i - 1].description;
        recipeChange.prevTitle = versions[i - 1].title;
      }

      changes.push(recipeChange);
    }

    return changes.reverse();
  }
}

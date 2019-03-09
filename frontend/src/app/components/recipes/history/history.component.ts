import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from 'src/app/shared/services/api-client.service';
import { ComparableRecipeChange } from 'src/app/models/comparable-recipe-change';
import { Recipe } from 'src/app/models/recipe';
import { apiPathConstants } from 'src/app/shared/constants/api-path-constants';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  currentRecipeId: string;
  recipe: Recipe;
  comparableRecipeChanges: ComparableRecipeChange[];

  constructor(private activatedRoute: ActivatedRoute, private apiClientService: ApiClientService) {}

  ngOnInit() {
    this.currentRecipeId = this.activatedRoute.snapshot.queryParams.recipeId;
    this.apiClientService.get<Recipe>(apiPathConstants.recipe + this.currentRecipeId).subscribe(recipe => {
      this.recipe = recipe;
    });
  }
}

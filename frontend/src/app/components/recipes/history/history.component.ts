import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeChange } from 'src/app/models/recipe-change';
import { Recipe } from 'src/app/models/recipe';
import { RecipeVersion } from 'src/app/models/recipe-version';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { BaseComponent } from 'src/app/shared/base-component/base-component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent extends BaseComponent implements OnInit {
  recipeChanges: RecipeChange[] = [];

  private recipe: Recipe;
  private currentRecipeId: string;

  constructor(injector: Injector, private activatedRoute: ActivatedRoute, private recipeService: RecipeService) {
    super(injector);
  }

  ngOnInit() {
    this.currentRecipeId = this.activatedRoute.snapshot.queryParams.recipeId;

    this.recipeService.getOneRecipe(this.currentRecipeId).subscribe(recipe => {
      this.recipe = recipe;
      this.recipeChanges = this.buildFullRecipeHistory(this.recipe.previousVersions);
    });
  }

  private buildFullRecipeHistory(versions: RecipeVersion[]): RecipeChange[] {
    return versions
      .map((version, i) =>
        Object.assign({}, version, {
          prevDescription: i > 0 ? versions[i - 1].description : '',
          prevTitle: i > 0 ? versions[i - 1].title : '',
        })
      )
      .sort((a, b) => {
        return new Date(b.modifiedDate).getTime() - new Date(a.modifiedDate).getTime();
      });
  }
}

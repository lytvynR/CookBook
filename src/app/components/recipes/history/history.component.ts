import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from 'src/app/shared/services/api-client.service';
import { RecipeChange } from 'src/app/models/recipe-change';
import { ComparableRecipeChange } from 'src/app/models/comparable-recipe-change';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  currentRecipeId: string;
  private recipeChanges: RecipeChange[] = [];
  comparableRecipeChanges: ComparableRecipeChange[];

  constructor(private activatedRoute: ActivatedRoute, private apiClientService: ApiClientService) {}

  ngOnInit() {
    this.currentRecipeId = this.activatedRoute.snapshot.params.id;
    // this.apiClientService.get<RecipeChange[]>(apiPathConstants.recipeHistory + this.currentRecipeId).subscribe(recipeChanges => {
    //   this.recipeChanges = recipeChanges;
    // });

    this.recipeChanges = [
      { id: '1a', recipeId: '123a', modifiedDate: 'modifiedData', title: 'sometitle1', description: 'somedescription1' },
      { id: '2a', recipeId: '123a', modifiedDate: 'modifiedData', title: 'sometitle2', description: 'somedescription2' }
    ];
    this.comparableRecipeChanges = this.buildComparableRecipeChanges(this.recipeChanges);
  }

  buildComparableRecipeChanges(recipeChanges: RecipeChange[]): ComparableRecipeChange[] {
    let changes = [];

    for (let i = 0; i < recipeChanges.length; i++) {
      let comparableRecipeChange: ComparableRecipeChange = {
        id: recipeChanges[i].id,
        modifiedDate: recipeChanges[i].modifiedDate,
        recipeId: recipeChanges[i].recipeId,
        description: recipeChanges[i].description,
        prevDescription: '',
        title: recipeChanges[i].title,
        prevTitle: '',
      };

      if (i < recipeChanges.length - 1) {
        comparableRecipeChange.prevDescription = recipeChanges[i + 1].description;
        comparableRecipeChange.prevTitle = recipeChanges[i + 1].title;
      }

      changes.push(comparableRecipeChange);
    }

    return changes;
  }
}

export interface ComparableRecipeChange {
  id: string;
  recipeId: string;
  modifiedDate: string;
  title: string;
  prevTitle: string;
  description: string;
  prevDescription: string;
}

export const comparableRecipeChangeProps = {
  id: 'id',
  recipeId: 'recipeId',
  modifiedDate: 'modifiedDate',
  title: 'title',
  description: 'description'
};

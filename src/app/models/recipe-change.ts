export interface RecipeChange {
  id: string;
  recipeId: string;
  modifiedDate: string;
  title: string;
  description: string;
}

export const recipeChangeProps = {
  id: 'id',
  recipeId: 'recipeId',
  modifiedDate: 'modifiedDate',
  title: 'title',
  description: 'description'
};

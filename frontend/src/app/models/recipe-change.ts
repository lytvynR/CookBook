export interface RecipeChange {
  modifiedDate: string;
  title: string;
  prevTitle: string;
  description: string;
  prevDescription: string;
}

export const comparableRecipeChangeProps = {
  modifiedDate: 'modifiedDate',
  title: 'title',
  prevTitle: 'prevTitle',
  description: 'description',
  prevDescription: 'prevDescription'
};

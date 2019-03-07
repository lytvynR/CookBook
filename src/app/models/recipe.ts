export interface Recipe {
  id: string;
  createdDate: string;
  modifiedDate: string;
  title: string;
  description: string;
}


export const recipeProps = {
  id: 'id',
  createdDate: 'createdDate',
  modifiedDate: 'modifiedDate',
  title: 'title',
  description: 'description'
}

import { RecipeVersion } from './recipe-version';

export interface Recipe {
  id: string;
  createdDate: string;
  modifiedDate: string;
  title: string;
  description: string;
  previousVersions: RecipeVersion[];
}


export const recipeProps = {
  id: 'id',
  createdDate: 'createdDate',
  modifiedDate: 'modifiedDate',
  title: 'title',
  description: 'description',
  previousVersions: 'previousVersions',
};

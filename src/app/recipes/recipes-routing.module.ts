import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesPage } from './recipes.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'add-new-recipe',
    loadChildren: () => import('./add-new-recipe/add-new-recipe.module').then( m => m.AddNewRecipePageModule)
  }
  // {
  //   path: 'tabs',
  //   component: RecipesPage,
  //   children: [
  //     {
  //       path: 'search',
  //       children: [
  //         { path: '',
  //           loadChildren: './search/search.module#SearchPageModule'
  //         }
  //       ]
  //     },
  //     {
  //       path: 'addNew',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: './add-new-recipe/add-new-recipe.module#AddNewRecipePageModule'
  //         }
  //       ]
  //     },
  //     {
  //       path: '',
  //       redirectTo: '/recipes/tabs/search',
  //       pathMatch: 'full'
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   redirectTo: '/recipes/tabs/search',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesPageRoutingModule {}

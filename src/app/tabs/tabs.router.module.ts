import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('../categories/categories.module').then(
            (m) => m.CategoriesPageModule
          ),
      },
      {
        path: 'categories/:id',
        loadChildren: () =>
          import('../categories/categories.module').then(
            (m) => m.CategoriesPageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfilePageModule),
      },
      {
        path: 'help',
        loadChildren: () =>
          import('../help/help.module').then((m) => m.HelpPageModule),
      },
    ],
  },
  // /app/ redirect
  {
    path: '',
    redirectTo: 'app/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [],
})
export class TabsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworkListPageComponent } from './core/pages/artwork/list/artwork-list-page.component';
import { ArtworkViewPageComponent } from './core/pages/artwork/view/artwork-view-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/artworks',
  },
  {
    path: 'artworks',
    component: MainLayoutComponent,
    children: [
      { path: '', component: ArtworkListPageComponent },
      { path: ':id', component: ArtworkViewPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

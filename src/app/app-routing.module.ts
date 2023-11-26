import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworkListPageComponent } from '../pages/artwork-list-page/artwork-list-page.component';
import { ArtworkViewPageComponent } from '../pages/artwork-view-page/artwork-view-page.component';
import { MainLayoutComponent } from '../shared/layouts/main-layout/main-layout.component';

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

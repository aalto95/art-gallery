import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworkListPageComponent } from './core/pages/artwork/list/artwork-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/artworks' },
  { path: 'artworks', component: ArtworkListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ArtworkListPageComponent } from './core/pages/artwork/list/artwork-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ArtworkPreviewComponent } from './shared/components/artwork-preview/artwork-preview.component';
import { ArtworkViewPageComponent } from './core/pages/artwork/view/artwork-view-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtworkListPageComponent,
    ArtworkPreviewComponent,
    ArtworkViewPageComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

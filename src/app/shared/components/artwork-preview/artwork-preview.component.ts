import { Component, HostBinding, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-artwork-preview',
  templateUrl: './artwork-preview.component.html',
  styleUrls: ['./artwork-preview.component.scss'],
  standalone: true,
  imports: [NgIf, RouterLink],
})
export class ArtworkPreviewComponent {
  @Input() artwork: any;

  loaded = false;
  isLoadError = false;

  @HostBinding('class.artwork-preview') artworkPreview = true;

  onImageLoad(event: any) {
    this.loaded = true;
  }

  onImageLoadError(event: any) {
    this.isLoadError = true;
  }
}

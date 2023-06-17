import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-artwork-preview',
  templateUrl: './artwork-preview.component.html',
  styleUrls: ['./artwork-preview.component.scss'],
})
export class ArtworkPreviewComponent {
  @Input() artwork: any;

  loaded = false;
  isLoadError = false;

  @HostBinding('class.artwork-preview') get artworkPreview() {
    return true;
  }

  onImageLoad(event: any) {
    this.loaded = true;
  }

  onImageLoadError(event: any) {
    this.isLoadError = true;
  }
}

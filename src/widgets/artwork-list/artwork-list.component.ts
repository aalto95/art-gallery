import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkPreviewComponent } from 'src/entities/artwork-preview/artwork-preview.component';

@Component({
  selector: 'app-artwork-list',
  standalone: true,
  imports: [CommonModule, ArtworkPreviewComponent],
  templateUrl: './artwork-list.component.html',
  styleUrl: './artwork-list.component.scss',
})
export class ArtworkListComponent {
  @Input() artworks: any;
}

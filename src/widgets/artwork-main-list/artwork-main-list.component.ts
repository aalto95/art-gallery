import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkListComponent } from '../artwork-list/artwork-list.component';

@Component({
  selector: 'app-artwork-main-list',
  standalone: true,
  imports: [CommonModule, ArtworkListComponent],
  templateUrl: './artwork-main-list.component.html',
  styleUrl: './artwork-main-list.component.scss',
})
export class ArtworkMainListComponent {
  @Input() artworks: any;
}

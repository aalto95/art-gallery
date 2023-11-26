import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from './../../../../shared/services/api.service';
import { Component } from '@angular/core';
import { first } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-artwork-view-page',
  templateUrl: './artwork-view-page.component.html',
  styleUrls: ['./artwork-view-page.component.scss'],
  standalone: true,
  imports: [RouterLink, NgIf],
})
export class ArtworkViewPageComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  public artwork: any;
  public loaded = false;

  ngOnInit() {
    this.route.params.pipe(first()).subscribe({
      next: (params) => {
        this.apiService.getArtwork(params['id']).subscribe({
          next: (artwork) => {
            this.artwork = artwork.data;
          },
        });
      },
    });
  }

  onImageLoad() {
    this.loaded = true;
  }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { ApiService } from 'src/shared/api/api.service';
import { ArtworkPreviewComponent } from 'src/entities/artwork-preview/artwork-preview.component';
import { NgIf, NgFor } from '@angular/common';
import { ArtworkListComponent } from 'src/widgets/artwork-list/artwork-list.component';

@Component({
  selector: 'app-artwork-list-page',
  templateUrl: './artwork-list-page.component.html',
  styleUrls: ['./artwork-list-page.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, ArtworkPreviewComponent, ArtworkListComponent],
})
export class ArtworkListPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  pagination: any;
  artworks: any = [];

  fetchOnRouteChange$: Subscription | undefined;

  ngOnInit() {
    this.fetchOnRouteChange$ = this.route.queryParams.subscribe({
      next: (queryParams) => {
        this.apiService
          .getArtworks(queryParams)
          .pipe(
            map((data: any) => {
              return {
                data: data.data.filter((artwork: any) => artwork.image_id),
                pagination: data.pagination,
              };
            })
          )
          .subscribe((data) => {
            this.artworks = data.data;
            this.pagination = data.pagination;
          });
      },
    });
  }

  changePage(direction?: 'LEFT' | 'RIGHT'): void {
    if (direction === 'LEFT') {
      this.router.navigate(['/artworks'], {
        queryParams: {
          page: this.pagination.current_page - 1,
        },
      });
    } else {
      this.router.navigate(['/artworks'], {
        queryParams: {
          page: this.pagination.current_page + 1,
        },
      });
    }
  }

  navigateToPage(ev: Event): void {
    this.router.navigate(['/artworks'], {
      queryParams: {
        page: (ev.target as HTMLInputElement).value,
      },
    });
  }
}

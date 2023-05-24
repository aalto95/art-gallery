import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-artwork-list-page',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.scss'],
})
export class ArtworkListPageComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  artworks: any = [];

  ngOnInit() {
    this.apiService.getArtworks().subscribe((data) => {
      this.artworks = data.data;
    });
  }
}

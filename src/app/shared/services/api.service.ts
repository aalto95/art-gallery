import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private apiAddress = 'https://api.artic.edu/api/v1';

  public getArtworks(): Observable<any> {
    return this.http.get(`${this.apiAddress}/artworks`);
  }

  public getArtwork(id: number): Observable<any> {
    return this.http.get(`${this.apiAddress}/artworks/${id}`);
  }
}

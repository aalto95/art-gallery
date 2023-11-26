import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private apiAddress = 'https://api.artic.edu/api/v1';

  public getArtworks(queryParams?: any): Observable<any> {
    let params = new HttpParams().set('page', queryParams?.page);
    return this.http.get(`${this.apiAddress}/artworks`, {
      params: params,
    });
  }

  public getArtwork(id: number): Observable<any> {
    return this.http.get(`${this.apiAddress}/artworks/${id}`);
  }
}

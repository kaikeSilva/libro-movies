import { MovieApiResponse } from './../models/movie-api-response.model';
import { Movie } from './../models/movie.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  api_key: string = "938c38138ffdbd91d12f1e7c56414856"
  api_token: string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzhjMzgxMzhmZmRiZDkxZDEyZjFlN2M1NjQxNDg1NiIsInN1YiI6IjYwYTEwNjg0MTYyYmMzMDA3OGI5N2RiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A9Egw_L7AwfZC7misrZpD2fw0vcTFXT9FREAqyZ1CW4"
  _url: string = "https://api.themoviedb.org/3/movie"
  image_url: string = "https://image.tmdb.org/t/p/w500?&language=en-US&include_image_language=en,null"
  headers: any = {accept: 'application/json', authorization: `Bearer ${this.api_token}`}

  constructor(private _httpClient: HttpClient) { }

  get(movieId: number) {
    let url = `${this._url}/${movieId}?language=pt-BR`;
    return this._httpClient.get(`${url}`, {headers: this.headers}).pipe(
      map(res => {
       return new Movie(res)
      })
    )
  }

  getAll(params: any) {
    let url = `${this._url}/popular?language=pt-BR`;
    url += params?.page ? `&page=${params?.page}` : ""
    return this._httpClient.get(`${url}`, {headers: this.headers}).pipe(
      map(res => new MovieApiResponse(res))
    )
  }
}

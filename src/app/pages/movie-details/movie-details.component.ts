import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  loading: boolean = false;
  movie: Movie;
  movieId: number;

  constructor(
    private _moviesService: MoviesService,
    private _route: ActivatedRoute,
  ) {
    this.movieId = this._route.snapshot.params.id
    this.loadMovie()
  }

  ngOnInit(): void {
  }

  loadMovie() {
    this.loading = true
    this._moviesService.get(this.movieId).subscribe(res => {
      this.movie = res
      console.log(this.movie);
      this.loading = false
    },err => {
      console.log(err)
      this.loading = false
    })
  }
}

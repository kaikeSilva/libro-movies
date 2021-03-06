import { Movie } from './../../models/movie.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input('movie') movie: Movie;
  @Output() onMovieSelected = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  emmitClickedEvent() {
    this.onMovieSelected.emit(this.movie?.id)
  }
}

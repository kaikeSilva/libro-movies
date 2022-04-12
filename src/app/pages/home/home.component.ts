import { Router } from '@angular/router';
import { Movie } from './../../models/movie.model';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  opened: boolean = false
  movies: Movie[] = [];
  scrollThreshold: number = 150;
  actualPage: number = 0;
  loading: boolean = false;

  constructor(    
    private _moviesService: MoviesService,
    private _router: Router,
  ) { }

  @HostListener("window:scroll", ['$event'])
  callMore(event) {
    if (this.loading) return
    if ( event.target.scrollHeight - (event.target.scrollTop + event.target.offsetHeight) <= this.scrollThreshold) {
      this.loading = true
      this.scrollThreshold = -100000000
      this.loadMovies()
    }
  }

  ngOnInit() {
    this.loadMovies()
  }

  openFilters() {
    this.opened = !this.opened
  }

  loadMovies() {
    this.loading = true
    this._moviesService.getAll({page: this.actualPage++}).subscribe(res => {
      this.movies = [...this.movies, ...res.results]
      this.loading = false
      this.scrollThreshold = 250
    },err => {
      console.log(err)
      this.loading = false
    })
  }

  navigateToDetails(id: number) {
    if(id) this._router.navigate(['movie', id])
  }

}

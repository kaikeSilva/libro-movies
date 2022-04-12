import { Movie } from './movie.model';
export class MovieApiResponse {
    page: number;
    results: Movie[]
    totalPages: number
    totalResults: number

    constructor(data: any) {
        this.page = data.page
        this.results = data.results.map(movie => new Movie(movie))
        this.totalPages = data.total_pages
        this.totalResults = data.total_results
    }
}
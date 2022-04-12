import { SpokenLanguage } from './spoken-language.model';
import { ProductionCountry } from './production-country.model';
import { ProductionCompany } from './production-company.model';
import { Genre } from "./genre.model"

export class Movie {
    adult: boolean
    _backdropPath: string
    belongsToCollection: any
    budget: number
    homepage: string
    id: number
    imdbId: string
    originalLanguage: string
    originalTitle: string
    overview: string
    popularity: number
    _posterPath: string
    releaseDate: string
    revenue: number
    runtime: number
    status: string
    tagline: string
    title: string
    video: boolean
    voteAverage: number
    voteCount: number
    
    productionCountries: ProductionCountry[]
    productionCompanies: ProductionCompany[]
    spokenLanguages: SpokenLanguage[]
    genres: Genre[]

    get posterPath(): string {
        return `http://image.tmdb.org/t/p/w500/${this._posterPath}`
    }
    
    get backdropPath(): string {
        return `http://image.tmdb.org/t/p/original/${this._backdropPath}`
    }

    constructor(data: any) {
        this.adult = data?.adult
        this._backdropPath = data?.backdrop_path
        this.belongsToCollection = data?.belongs_to_collection
        this.budget = data?.budget
        this.homepage = data?.homepage
        this.id = data?.id
        this.imdbId = data?.imdb_id
        this.originalLanguage = data?.original_language
        this.originalTitle = data?.original_title
        this.overview = data?.overview
        this.popularity = data?.popularity
        this._posterPath = data?.poster_path
        this.releaseDate = data?.release_date
        this.revenue = data?.revenue
        this.runtime = data?.runtime
        this.status = data?.status
        this.tagline = data?.tagline
        this.title = data?.title
        this.video = data?.video
        this.voteAverage = data?.vote_average
        this.voteCount = data?.vote_count
        
        this.productionCompanies = data?.production_companies?.map(prodCompany => new ProductionCompany(prodCompany ))
        this.spokenLanguages = data?.spoken_languages?.map(spokenLang => new SpokenLanguage(spokenLang))
        this.productionCountries = data?.production_countries?.map(prodCompany => new ProductionCountry(prodCompany))
        this.genres = data?.genres?.map(genre => new Genre(genre))
    }

}
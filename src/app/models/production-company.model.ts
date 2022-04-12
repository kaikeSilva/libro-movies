export class ProductionCompany {
    id: number
    logoPath: string
    name: string
    originCountry: string

    constructor(data: any) {
        this.id = data.id 
        this.logoPath = data.logo_path 
        this.name = data.name 
        this.originCountry = data.origin_country 
    }
}
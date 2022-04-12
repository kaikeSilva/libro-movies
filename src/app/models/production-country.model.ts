export class ProductionCountry {
    iso_3166_1: string
    name: string

    constructor(data: any) {
        this.iso_3166_1 = data.iso_3166_1
        this.name = data.name
    }
}
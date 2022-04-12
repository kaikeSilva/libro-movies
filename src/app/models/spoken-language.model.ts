export class SpokenLanguage {
    englishName: string
    iso_639_1: string
    name: string

    constructor(data: any) {
        this.englishName = data.english_name
        this.iso_639_1 = data.iso_639_1
        this.name = data.name
    }
}
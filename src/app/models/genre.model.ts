export class Genre {
    id: number
    name: string

    constructor(data: any) {
        this.id = data.id
        this.name = data.name
    }

    getObjProp() {
        return "propriendade de generos"
    }
}
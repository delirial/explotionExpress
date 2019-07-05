import { MovieDTO } from '../../types/MovieDTO'

export class movieRepository {
    
    constructor(data: MovieDTO){
        this.data = data
    }
    save(){
        throw new Error("Not implemented")
    }
    load(){
        throw new Error("Not implemented") 
    }
    findMovieByTitle(){
        throw new Error("Not implemented") 
    }
    findMovieById(){
        throw new Error("Not implemented") 
    }
}
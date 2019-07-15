import  MovieDTO  from "../../types/MovieDTO";

export class ParserInput{
    private static parseInput(data: any): MovieDTO {
        return {
            title: data.title,
            year: data.year,
            genre: data.genre,
            duration: data.duration,
        };
    }
}
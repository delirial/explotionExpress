import { Document, Model, model, Schema } from 'mongoose';
import  MovieDTO  from '../../../types/MovieDTO';

export interface MovieModel extends MovieDTO, Document {
    getTitleAndYear(): string;
}
export const MovieSchema: Schema = new Schema({
    title: String,
    year: Number,
    genre: [String],
    duration: Number,
});

MovieSchema.methods.getTitleAndDuration = function(): string {
    return this.title + ' ' + this.duration;
};

export const Movie: Model<MovieModel> = model<MovieModel>('movies', MovieSchema);

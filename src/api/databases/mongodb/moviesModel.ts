import { Document, Model, model, Schema } from 'mongoose';
import { MovieDTO } from 'MovieDTO';

export interface MovieModel extends MovieDTO, Document {
    getTitleAndYear(): string;
}
export const MovieSchema: Schema = new Schema({
    title: String,
    year: Number,
    genre: [String],
    duration: Number,
});

MovieSchema.methods.getTitleAndYear = function(): string {
    return this.title + ' ' + this.duration;
};

export const Movie: Model<MovieModel> = model<MovieModel>('movies', MovieSchema);

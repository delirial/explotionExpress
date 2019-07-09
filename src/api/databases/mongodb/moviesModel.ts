import { mongoose, Schema } from 'mongoose';

const MovieSchema = new Schema({
    title: String,
    year: Number,
    genre: [String],
    duration: Number,
});
export const MovieModel = mongoose.model('movies', MovieSchema);

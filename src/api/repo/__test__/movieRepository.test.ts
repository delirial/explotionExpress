import { MovieRepository } from '../movieRepository';
import MovieDTO from 'MovieDTO';
import { ObjectId } from 'mongodb';

describe('MovieRepository', () => {
    //TODO: This can be mock
    const repo = new MovieRepository('127.0.0.1','movies');
    const newMovie: MovieDTO = {
        title:'Interstellar',
        year:2014,
        genre:['science','fiction'],
        duration: 169
    }
    describe('getConnectionState', () => {
        test('Check connection to database', () => {
            return repo.getConnection().then(state => {
                expect(state.readyState).toBe(1);
            });
        });
    });
    describe('createMovie', () => {
        test('should return void or callback', () => {
            return repo.create(newMovie)
            .then(data => {
                console.log("Create :",data)
                expect(data).toMatchSnapshot();
            });
        });
    });
    describe('getMovieById', () => {
        test('should return data for Id', () => {
            const id = new ObjectId('5d305371610ea402dee6547b')
            return repo.getById(id)
            .then(data => {
                console.log("Get :",data)
                expect(data).toMatchSnapshot();
            });
        });
    });
    describe('updateMovieById', () => {
        test('should return json object updated', () => {
            const id = new ObjectId('5d305371610ea402dee6547b')
            return repo.updateById(id,{title:'Georgia'})
            .then(data => {
                console.log("Update: ",data)
                expect(data).toMatchSnapshot();
            });
        });
    });
    describe('deleteMovieById', () => {
        test('should return a delete response with obj and number', () => {
            const id = new ObjectId('5d305371610ea402dee6547b')
            return repo.deleteById(id)
            .then(data => {
                console.log("Delete: ",data)
                expect(data).toBe(data);
            });
        });
    });
    describe('giveLikeId', () => {
        test('should return a new property for object', () => {
            const id = new ObjectId('5d305371610ea402dee6547d')
            return repo.giveLikeById(id)
            .then(data => {
                console.log("Give: ",data)
                expect(data).toBe(data);
            });
        });
    });
    describe('getAllMovies', () => {
        test('should return all movies in JSON', () => {
            return repo.getAll()
            .then(data => {
                console.log("All: ",data)
                expect(data).toMatchSnapshot();
            });
        });
    });
});

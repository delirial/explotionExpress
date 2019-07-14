db.createUser({
    user: '${MONGO_INITDB_ROOT_USERNAME}',
    pwd: '${MONGO_INITDB_ROOT_PASSWORD}',
    roles: [
        {
            role: 'readWrite',
            db: 'MONGO_INITDB_DATABASE',
        },
    ],
});
db = db.getSiblingDB('movies');
db.movies.insertMany([
    { title: 'Toy Story 4', year: 2019, genre: ['Comedy', 'Animation'], duration: 100 },

    { title: 'Vengadores:Endgame', year: 2019, genre: ['SuperHero', 'Action'], duration: 181 },

    { title: 'Glass', year: 2019, genre: ['Terror', 'Suspense'], duration: 129 },
]);

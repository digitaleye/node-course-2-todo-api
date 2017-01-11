
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server')

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos: ${count}` );
    //     console.log(JSON.stringify(count, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // })

    db.collection('Users').find({name: 'Fahar'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    })

    //db.close();
})

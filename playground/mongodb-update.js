
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server')

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('587692c37e59977a1aefd3d6')
    }, {
        $set: {
            completed: true
        },
        $inc: {
            age:1
        }
    }, {
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    })

    //db.close();
})
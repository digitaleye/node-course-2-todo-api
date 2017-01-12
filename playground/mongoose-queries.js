const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '52877edf58755ce2d39eddc6e';
//
// if(!ObjectID.isValid(id)){
//     console.log('ID not valid')
// }


// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos)
// }).catch(error)
//
// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo)
// })

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo By Id:', todo)
// }).catch((error) => {
//     console.log(error)
// })

var id = '5876f5a011e539154e69a50e'

User.findById(id).then((user) => {
    if(!user){
       return console.log('Unable to find user')
    }

       console.log(JSON.stringify(user, undefined, 2))
}).catch((error) =>{
    console.log(error)
})




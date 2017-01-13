const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result)=>{
    console.log(result);
})

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '58791fd873765de18fc01537'}).then((todo)=>{
    console.log(todo);
})

Todo.findByIdAndRemove('58791fd873765de18fc01537').then((todo)=>{
    console.log(todo);
})
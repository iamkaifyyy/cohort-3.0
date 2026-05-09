// for making the database file

const mongoose = require("mongoose");

const Schema = mongoose.schema;
const objectID = Schema.objectID;

const user = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});

const todo = new Schema({
    userId: objectID,
    title: String,
    done: Boolean
})

const UserModel = mongoose.model('users', user);
const todoModel = mongoose.model('todos', Todo);

module.exports = {
    UserModel,
    todoModel
}
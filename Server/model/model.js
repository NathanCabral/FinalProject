const mongoose = require('mongoose');

let schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Golf',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },function(error){
        if(error){
            console.error('Unable to connect to MongoDB: ', error);
        } else{
            console.log('Connected to MongoDB');
        }
    }
);

let playerSchema = new schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    email: String,
    username: 
    {
        type: String,
        unique: true,
        index: this
    },
    password: String
},
{
    collection: 'players'
});

let gameSchema = new schema({
    gameTitle:{
        type: String,
        unique: true,
        index: true
    },
    gameStart: Date,
    gameEnd: Date,
    courseID: String,
    player1: String,
    player2: String,
    player3: String,
    player4: String,
    player5: String
},
{
    collection: 'games'
});

let courseSchema = new schema({
    courseID:{
        type: String,
        unique: true,
        index: true
    },
    name: String,
    address: String,
},
{
    collection: 'courses'
});

let scoreSchema = new schema({
    username: String,
    courseID: String,
    score: Number,
},
{
    collection: 'scores'
});

module.exports.Players = mongoose.model('players', playerSchema);
module.exports.Games = mongoose.model('games', gameSchema);
module.exports.Courses = mongoose.model('courses', courseSchema);
module.exports.Scores = mongoose.model('scores', scoreSchema);

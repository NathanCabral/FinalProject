const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017')
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

let loginSchema = new schema({
    playerID: String,
    username: String,
    password: String
},
{
    collection: 'logins'
});

let playerSchema = new schema({
    playerID:{
        type: String,
        unique: true,
        index: true
    },
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    email: String
},
{
    collection: 'players'
});

let gameSchema = new schema({
    gameID:{
        type: String,
        unique: true,
        index: true
    },
    gameDate: Date,
    gameTime: String,
    courseID: String,
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
    Name: String,
    Address: String,
},
{
    collection: 'courses'
});

let scoreSchema = new schema({
    playerID: String,
    courseID: String,
    Score: int,
},
{
    collection: 'scores'
});

module.exports.Login = mongoose.model('logins', loginSchema);
module.exports.Players = mongoose.model('players', playerSchema);
module.exports.Games = mongoose.model('games', gameSchema);
module.exports.Courses = mongoose.model('courses', courseSchema);
module.exports.Scores = mongoose.model('scores', scoreSchema);
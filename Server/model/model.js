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
    title:{
        type: String,
        unique: true,
        index: true
    },
    start: Date,
    end: Date,
    courseID: String,
},
{
    collection: 'games'
});

let chosengamesSchema = new schema({
    gameID: String,
    username: String,
},
{
    collection: 'chosengames'
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
module.exports.Chosengames = mongoose.model('chosengames', chosengamesSchema)

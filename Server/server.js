const express = require('express');
const model = require('./model/model.js');
const bodyParser = require("body-parser");
const path = require('path');
let app = express();

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../golfapp/build')));
app.use(express.urlencoded({extended:false}));


app.post('/api/addPlayer',(req,res) =>
{
    let playerData = 
    {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    };

    let newPlayer = new model.Players(playerData);

    newPlayer.save(function(error)
    {
        if(error)
        {
            console.error('Unable to add player: ', error);
        }
        else
        {
            console.log('Player has been added successfully!');
        }
    });
});

app.post('/api/addGame',(req,res) =>
{
    let gameData = 
    {
        gameID: req.body.gameID,
        gameDate: req.body.gameDate,
        gameTime: req.body.gameTime,
        courseID: req.body.courseID,
    };

    let newGame = new model.Games(gameData);

    newGame.save(function(error)
    {
        if(error)
        {
            console.error('Unable to add Game: ', error);
        }
        else
        {
            console.log('Game has been added successfully!');
        }
    });

});

app.post('/api/addScore',(req,res) =>
{
    let scoreData = 
    {
        playerID: req.body.playerID,
        courseID: req.body.courseID,
        score: req.body.score
    };

    let newScore  = new model.Scores(scoreData);

    newScore.save(function(error)
    {
        if(error)
        {
            console.error('Unable to add Score: ', error);
        }
        else
        {
            console.log('Score has been added successfully!');
        }
    });
});

app.post('/api/addCourse',(req,res) =>
{
    let courseData = 
    {
        courseID: req.body.courseID,
        name: req.body.name,
        address: req.body.address
    };

    let newCourse = new model.Courses(courseData);

    newCourse.save(function(error)
    {
        if(error)
        {
            console.error('Unable to add Game: ', error);
        }
        else
        {
            console.log('Game has been added successfully!');
        }
    });
});

app.get('/api/players', (req,res) =>
{
    model.Players.find().then(function(playersList)
    {
       res.json(playersList);
    });
});

app.get('/api/games', (req,res) =>
{
    model.Games.find().then(function(gamesList)
    {
        res.json(gamesList);
    });
});

app.get('/api/courses', (req,res) =>
{
    model.Courses.find().then(function(coursesList)
    {
        res.json(coursesList);
    });
});

app.get('/api/scores', (req,res) =>
{
    model.Scores.find().then(function(scoresList)
    {
        res.json(scoresList);
    });
});

app.get('/api/player/:username',(req,res) =>
{
    model.Players.find().then(function(playersList)
    {
       for(var i = 0; i < playersList.length; i++)
       {
           if(playersList[i]['username'] == req.params.username)
           {
               res.json(playersList[i]);
           }
       }
    });
});

app.get('/api/scores/:username',(req,res) =>
{
    model.Scores.find().then(function(scoresList)
    {
        var scores = []
       for(var i = 0; i < scoresList.length; i++)
       {
           if(scoresList[i]['username'] == req.params.username)
           {
               scores.push(scoresList[i]);
           }
       }
       res.json(scores);
    });
});

app.get('/api/game/:gameID',(req,res) =>
{
    model.Games.find().then(function(gamesList)
    {
       for(var i = 0; i < gamesList.length; i++)
       {
           if(gamesList[i]['gameID'] == req.params.gameID)
           {
               res.json(gamesList[i]);
           }
       }
    });
});

app.get('/api/course/:courseID',(req,res) =>
{
    model.Courses.find().then(function(coursesList)
    {
       for(var i = 0; i < coursesList.length; i++)
       {
           if(coursesList[i]['courseID'] == req.params.courseID)
           {
               res.json(coursesList[i]);
           }
       }
    });
});

app.set('port', 8081);
app.listen(app.get('port'),function(){
    console.log(`Listening on port ${app.get('port')}`);
});
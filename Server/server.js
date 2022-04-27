const express = require('express');
const model = require('./model/model.js');
const bodyParser = require("body-parser");
const path = require('path');
const dot = require('dotenv').config()
const mail = require('@sendgrid/mail');
const Pusher = require('pusher')
const { json } = require('express');
const { default: mongoose } = require('mongoose');

let app = express();

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../golfapp/build')));
app.use(express.urlencoded({extended:false}));

mail.setApiKey('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')

app.get('/api/mail/welcome/:username/:password',(req,res) =>
{
    model.Players.find().then(function(welcomeUser)
    {
        for(var i = 0; i < welcomeUser.length; i++)
       {
           if(welcomeUser[i]['username'] == req.params.username && welcomeUser[i]['password'] == req.params.password)
           {
               const msg = 
               {
                   from: "Nathan.Cabral@ontariotechu.net",
                   template_id: "d-b27346e5c5a94cf392f3600d3465b9ea",
                   personalizations: [{
                    to: {email: welcomeUser[i]['email']},
                    dynamic_template_data: {
                        subject: "Resgistering with Oshawa Links!",
                        first_name: welcomeUser[i]['firstName'], 
                        last_name: welcomeUser[i]['lastName'],
                    },
                }],
               };

               mail
                .send(msg)
                .then(() => 
                    {
                        console.log('Email sent')
                        reload(res,"Email Has Been Sent!")
                    })
                .catch((error) => 
                {
                    console.error(error)
                    reload(res,error)
                })
           }
       }
    })  
});

app.get('/api/mail/reset/:username',(req,res) =>
{
    model.Players.find({username: req.params.username}).then(function(resetPassword)
    {
        const msg = 
        {
            from: "Nathan.Cabral@ontariotechu.net",
            template_id: "d-2494445a32c448b1a3f503e6f2bfa420",
            personalizations: [{
            to: {email: resetPassword[0]['email']},
            dynamic_template_data: {
                subject: "Password Reset Request!",
                first_name: resetPassword[0]['firstName'], 
                last_name: resetPassword[0]['lastName'],
            },
        }],
        };

        mail
        .send(msg)
        .then(() => 
            {
                console.log('Email sent')
                reload(res,"Email Has Been Sent!")
            })
        .catch((error) => 
        {
            console.error(error)
            reload(res,error)
        })
    })  
});

app.post('/api/updatePassword/:username',(req,res)=>
{
    model.Players.updateOne({username: req.params.username}, {password: req.body.player.newPassword}, function (err, result) {
        if(err)
        {
            console.log(err)
        }
        else{
            console.log(result)
        }
        
    })
})

app.post('/api/addPlayer',(req,res) =>
{
    let playerData = 
    {
        id: req.body.player.username,
        firstName: req.body.player.firstName,
        lastName: req.body.player.lastName,
        dateOfBirth: req.body.player.dateOfBirth,
        email: req.body.player.email,
        username: req.body.player.username,
        password: req.body.player.password
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
        gameTitle: req.body.game.title,
        gameStart: req.body.game.start,
        gameEnd: req.body.game.end,
        courseID: req.body.game.courseID,
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

app.get('/api/chosenGames/:username',(req,res) =>
{
    model.Chosengames.find({username: req.params.username}).then(function(games)
    {
       res.json(games);
    });
})

app.post('/api/add/choseGames', (req, res) =>
{
    console.log("choseGames called")
    let chosenGames = 
    {
        gameID: req.body.choseGames.gameID,
        username: req.body.choseGames.username
    }

    let newChoseGames = new model.Chosengames(chosenGames);

    newChoseGames.save(function(error)
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
})

app.post('/api/addScore',(req,res) =>
{
    let scoreData = 
    {
        playerID: req.body.score.playerID,
        courseID: req.body.score.courseID,
        score: req.body.score.score
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
        courseID: req.body.course.courseID,
        name: req.body.course.name,
        address: req.body.course.address
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

function reload(response,data)
{
    response.json(data);
}

app.get('/api/player/:username/:password',(req,res) =>
{
    var out = 0;
    model.Players.find().then(function(playersList)
    {
       for(var i = 0; i < playersList.length; i++)
       {
           if(playersList[i]['username'] == req.params.username && playersList[i]['password'] == req.params.password)
           {
               out = playersList[i];
           }
       }
        if(out == 0)
        {
            out == "No Player Found"
        }
        reload(res,out);
    });
});

app.get('/api/score/:username',(req,res) =>
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
       reload(res,scores);
    });
});

app.get('/api/game/:gameTitle',(req,res) =>
{
    var out = 0;
    model.Games.find().then(function(gamesList)
    {
       for(var i = 0; i < gamesList.length; i++)
       {
           if(gamesList[i]['gameTitle'] == req.params.gameTitle)
           {
               out = gamesList[i];
           }
       }
       if(out == 0)
       {
           out == "No Game Found"
       }
       reload(res,out);
    });
});

app.get('/api/course/:courseID',(req,res) =>
{
    model.Courses.find().then(function(coursesList)
    {
       var out = 0;
       for(var i = 0; i < coursesList.length; i++)
       {
           if(coursesList[i]['courseID'] == req.params.courseID)
           {
               out = coursesList[i];
           }
       }
       if(out == 0)
       {
           out == "No Course Found"
       }
       reload(res,out);
    });
});

app.set('port', 8081);
app.listen(app.get('port'),function(){
    console.log(`Listening on port ${app.get('port')}`);
});
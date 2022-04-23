const axios = require('axios');

export async function addPlayer(data)
{
    const response = await axios.post(`/api/addPlayer`,{player: data});
    return response.data;
}

export async function addGame(data)
{
    const response = await axios.post(`/api/addGame`,{game: data});
    return response.data;
}

export async function addCourse(data)
{
    const response = await axios.post(`/api/addCourse`,{course: data});
    return response.data;
}

export async function addScore(data)
{
    const response = await axios.post(`/api/addScore`,{score: data});
    return response.data;
}

export async function getPlayers()
{
    const response = await axios.get('api/players');
    return response.data;
}

export async function getGames()
{
    const response = await axios.get('api/games');
    return response.data;
}

export async function getCourses()
{
    const response = await axios.get('api/courses');
    return response.data;
}

export async function getScores()
{
    const response = await axios.get('api/scores');
    return response.data;
}

export async function getPlayer(username)
{
    var url = 'api/player/' + username;
    const response = await axios.get(url);
    return response.data;
}

export async function getGame(gameID)
{
    var url = 'api/game/' + gameID;
    const response = await axios.get(url);
    return response.data;
}

export async function getCourse(courseID)
{
    var url = 'api/course/' + courseID;
    const response = await axios.get(url);
    return response.data;
}

export async function getScore(username)
{
    var url = 'api/scores/' + username;
    const response = await axios.get(url);
    return response.data;
}
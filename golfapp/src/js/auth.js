const axios = require('axios');

export default{
    // To login into the page
    login(username, password, callback){
        authRequest(username, password, (res) => {
            if (res.auth){
                localStorage.token = res.token;
                localStorage.username = res.username;
                callback({
                    auth: true,
                    token: res.token
                });
                this.onLoginStatus(true)
            }else{
                delete localStorage.token;
                callback({
                    auth:false
                });
                this.onLoginStatus(false)
            }
        })
    },
    //To logout from the page
    logout(callback){
        delete localStorage.token;
        callback({
            auth:false
        });
        this.onLoginStatus(false)
    },
    isLoggedIn(){ return !!localStorage.token},
    getUser(){
        return localStorage.username;
    },
    onLoginStatus(status){
        console.log(status)
    }
}


function authRequest(username, password, callback){
    var url = 'api/player/' + username +'/' + password;
    axios.get(url)
        .then((result) => {
            console.log(result.data.username)
            
            if(result.data != 0){
                callback({
                    auth: true,
                    token: Math.random().toString(36).substring(7),
                    username:  result.data.username
                })
            }else{
                callback({
                    auth:false
                })
            }
        })
        .catch(err => console.log(err));

}

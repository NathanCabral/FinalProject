<template>
    <form @submit.prevent="login" id ="login">
        <label for="username"> Username: </label>
        <input type="text" v-model="username" name="username" placeholder="Username"/>

        <label for="password"> Password: </label>
        <input type="password" v-model="password" name="password" placeholder="Password"/>
        <div v-if="errorMessage"> {{errorMessage}} </div>
        <button class="btn"> Login </button>

    </form>
</template>

<script>
    //import { getPlayer } from '../services/services';
    import auth from '../js/auth';
    export default {
        name: "LoginForm",
        data(){
            return{
                username: "",
                password: "",
                errorMessage: ""
            }
        },
        methods:{
            login(){
                console.log('Call login()');
                // getPlayer(this.username, this.password).then(response => {
                //     console.log(response)
                // })
                auth.login(this.username, this.password, (res) => {
                    if (res.auth){
                        //Login succesful, go to home page.
                        console.log('Login success');
                        this.$router.replace('/');
                    } else{
                        //Login failed.
                        console.log('Loggin failed');
                        this.errorMessage = "Login failed";
                    }
                })
            }
        }
        //     login(){
        //         console.log('Call login()');
        //         getPlayer(this.username).then(response => {
        //             console.log(response)
        //             let user = response
        //             let password = user.password;
        //             if(user == 0){
        //                 console.log('Login failed');
        //                 this.errorMessage = "Login Failed. Account does not exist, Please Register to Log in"
        //                 setToken(false)
        //             }
        //             else if(password == this.password){
        //                 console.log('Login success');
        //                 this.$router.replace('/');
        //                 setToken(true)    
        //             }
        //             else{
        //                 console.log('Login failed');
        //                 this.errorMessage = "Login Failed, Username/Password combination not found"
        //                 setToken(false)
        //             }
        //         })
        //         var x = getToken();
        //         console.log(x)
        //     }
        // }
    }
</script>

<style scoped>
    #login{
        margin-top: 50px;
    }
    label{
        width: 30%;
        display: block;
        font-weight: bold;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
        text-align: left;
        margin: auto;
    }
    input{
        width: 30%;
        padding: 12px 20px;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
        display: block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    button {
        font-weight: bold;
        background-color: #c7d9be;
        color:  black;
        padding: 14px 20px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        border: none;
        cursor: pointer;
        display: block;
        width: 30%;
    }
</style>
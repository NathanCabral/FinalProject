<template>
    <div id="loginContent">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 42.08" width="100" height="101.346"><circle cx="20.5" cy="20.5" r="20" style="fill:#1d562a;stroke:#231f20;stroke-miterlimit:10"/><circle cx="20.5" cy="19.86" r="13.56" style="fill:#c8dabf"/><circle cx="20.5" cy="19.86" r="13.56" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><circle cx="20.5" cy="19.86" r="9.11" style="fill:#1f562b"/><circle cx="20.5" cy="19.86" r="9.11" style="fill:none;stroke:#231f20;stroke-miterlimit:10"/><rect x="20.21" y="36.81" width="13.85" height="4.77" style="fill:#c2852d;stroke:#231f20;stroke-miterlimit:10"/><rect x="17.48" y="12.57" width="5.45" height="29" style="fill:#c2852d;stroke:#231f20;stroke-miterlimit:10"/><path d="M21.92,39.65a1.6,1.6,0,0,0-.05.21c0,.12,0,.24,0,.36a1.23,1.23,0,0,0,.1.42L24,39.57l-.49,0,.83.44s0-.09,0-.13a.66.66,0,0,0,0-.14.27.27,0,0,0,0-.12,1.18,1.18,0,0,0-.17-.22l0,0-.2-.1h0a1.52,1.52,0,0,0-.42-.06,1.83,1.83,0,0,0-.52,0,2.34,2.34,0,0,0-.58.14,2.57,2.57,0,0,0-.52.21l-.27.17a.85.85,0,0,0-.31.34v.16a.37.37,0,0,0,.27.23h0l-.19-.09a.27.27,0,0,1,.11.1l-.09-.14a.36.36,0,0,1,.06.2v-.16s0,0,0,.06v.16a.27.27,0,0,0,.18.18.41.41,0,0,0,.22.07,1.08,1.08,0,0,0,.44,0l.5,0a3.72,3.72,0,0,0,1.46-.39,1.94,1.94,0,0,0,.47-.34.4.4,0,0,0,.12-.33,1.13,1.13,0,0,1-.1-.54v.16a1.5,1.5,0,0,1,.06-.29.17.17,0,0,0,0-.22.27.27,0,0,0-.22-.16,1.22,1.22,0,0,0-.42-.06,2.3,2.3,0,0,0-.52,0l-.39.09a3.24,3.24,0,0,0-.71.27l-.27.16a1,1,0,0,0-.31.35Z" style="fill:#c2852d"/><path d="M25,39.59l-.12,0a1.17,1.17,0,0,0-.41,0,3,3,0,0,0-.52,0,3.8,3.8,0,0,0-.58.15,3,3,0,0,0-.52.2l-.28.16a.84.84,0,0,0-.31.31l0,.15a.33.33,0,0,0,.27.19l.12,0a1.17,1.17,0,0,0,.41,0,2.24,2.24,0,0,0,.52,0,2.91,2.91,0,0,0,.58-.15,3.28,3.28,0,0,0,.52-.2l.28-.16a.84.84,0,0,0,.31-.31l0-.15a.33.33,0,0,0-.27-.19Z" style="fill:#c2852d"/><path d="M22.81,41.11c.62,0,1.61-.18,1.9-.84s-.23-1-.83-1-1.62.18-1.91.84.23,1,.84,1Z" style="fill:#c2852d"/><path d="M24.36,38.63a1.71,1.71,0,0,1-.52-.48l.09.16a.79.79,0,0,1-.12-.44v.18a.47.47,0,0,1,0-.17.22.22,0,0,0,0-.26.33.33,0,0,0-.24-.2,1,1,0,0,0-.42-.07,1.81,1.81,0,0,0-.52,0,3,3,0,0,0-1.1.37,1.17,1.17,0,0,0-.56.56.75.75,0,0,0,0,.16,1.79,1.79,0,0,0,0,.33,1.19,1.19,0,0,0,.22.47,1.76,1.76,0,0,0,.51.47.67.67,0,0,0,.32.15,1.16,1.16,0,0,0,.45.05,2.09,2.09,0,0,0,.56-.06,3,3,0,0,0,.58-.17l.32-.16a1.37,1.37,0,0,0,.46-.37l.11-.19a.32.32,0,0,0-.09-.34Z" style="fill:#c2852d"/></svg>
        <form @submit.prevent="login" id ="login">
            <label for="username"> Username: </label>
            <input type="text" v-model="username" name="username" placeholder="Username"/>

            <label for="password"> Password: </label>
            <input type="password" v-model="password" name="password" placeholder="Password"/>
            <div v-if="errorMessage"> {{errorMessage}} </div>
            <button class="btn"> Login </button>
            <button class="forgot"> <router-link to="/enterForgot">Forgot My Password</router-link> </button>
        </form>
    </div>
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
                if(this.username == "" || this.password == "")
                {
                    this.errorMessage = "Please enter username and password to continue";
                }
                else
                {
                    auth.login(this.username, this.password, (res) => {
                    if (res.auth){
                        //Login succesful, go to home page.
                        console.log('Login success');
                        this.$router.replace('/');
                    } else{
                        //Login failed.
                        console.log('Login failed');
                        this.errorMessage = "Login failed";
                    }
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .forgot a{
        color: black;
        text-decoration: none;
    }
    .forgot{
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
    #login{
        margin-top: 20px;
    }
    #Layer_1{
        margin-top: 20px;
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

    .btn {
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
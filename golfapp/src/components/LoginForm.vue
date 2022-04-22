<template>
    <form id="login">
        <label for="username"> Username: </label>
        <input type="text" v-model="username" name="username" placeholder="Username"/>

        <label for="password"> Password: </label>
        <input type="password" v-model="password" name="password" placeholder="Password"/>
        <!-- <div v-if="errorMessage"> {{errorMessage}} </div> -->
        <button class="btn"> Login </button>

    </form>
</template>

<script>
    // import auth from '../js/auth';
    // export default {
    //     name: "LoginForm",
    //     data(){
    //         return{
    //             username: "",
    //             password: "",
    //             errorMessage: ""
    //         }
    //     },
    //     methods:{
    //         login(){
    //             console.log('Call login()');
    //             auth.login(this.username, this.password, (res) => {
    //                 if (res.auth){
    //                     //Login succesful, go to home page.
    //                     console.log('Login success');
    //                     this.$router.replace('/');
    //                 } else{
    //                     //Login failed.
    //                     console.log('Login failed');
    //                     this.errorMessage = "Login failed";
    //                 }
    //             })
    //         }
    //     }
    // }
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
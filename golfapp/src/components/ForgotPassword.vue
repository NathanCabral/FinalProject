<template>
    <form @submit.prevent="forgot" id ="ForgotPass">
        <label for="password"> Enter Username: </label>
        <input type="text" v-model="userName" name="userName" placeholder="Enter Username"/>

        <label for="password"> Enter New Password: </label>
        <input type="password" v-model="newPass" name="newPass" placeholder="New Password"/>

        <label for="password"> Confirm New Password: </label>
        <input type="password" v-model="newPassCon" name="newPassCon" placeholder="Confirm New Password"/>
    
        <div v-if="errorMessage"> {{errorMessage}} </div>

        <button class="btn"> Save </button>

    </form>
</template>

<script>
    import {updatePassword} from '../services/services';

    export default {
        name: "ForgotPassword",
        data(){
            return{
                userName: "",
                newPass: "",
                newPassCon: "",
                errorMessage: ""
            }
        },
        methods:{
            forgot(){
                console.log('Call Forgot()')
                let p1 = this.newPass;
                let p2 = this.newPassCon;
                let username = this.userName;

                if(p1 != p2 || p1 == '' || p2 == ''){
                    this.errorMessage = "Please Ensure the Passwords are Correct"
                }
                else{
                    var data = {
                        username: username,
                        newPassword: p1 
                    };
                    var output = updatePassword(data);
                    console.log(output);
                    this.$router.replace('/login');
                }
            }
            
        }
    }
</script>

<style scoped>

    #ForgotPass{
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

    .btn{
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

    .btn a{
        text-decoration: none;
        color: inherit;
    }

</style>
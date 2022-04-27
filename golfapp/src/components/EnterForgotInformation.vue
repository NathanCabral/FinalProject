<template>
    <div>
        <h5> Please enter your username below, if there is a corresponding username on record, you will recieve an email with a link to reset your password.</h5>

    <form @submit.prevent="input" id ="ForgotPass">
        <label for="password"> Enter Username: </label>
        <input type="text" v-model="userName" name="userName" placeholder="Enter Username"/>
    
        <div v-if="errorMessage"> {{errorMessage}} </div>

        <button class="btn"> Set New Password </button>

        <div></div>

        <div v-if="foundMessage"> {{foundMessage}} </div>
    </form>
    </div>
</template>

<script>
    import {resetPassword} from '../services/services';
    const axios = require('axios');
    export default {
        name: "ForgotPassword",
        data(){
            return{
                userName: "",
                errorMessage: "",
                foundMessage: ""
            }
        },
        methods:{
            input()
            {
                if(this.userName == "")
                {
                    this.errorMessage = "Please enter username to continue"
                }
                else
                {
                    let trigger = false;
                   axios.get('api/players').then((result) =>{
                       let playerList = result.data;
                      for(var i = 0; i < playerList.length;i++)
                      {
                          console.log(playerList[i]['username']);
                          console.log(this.userName);
                          if(this.userName == playerList[i]['username'])
                          {
                            resetPassword(this.userName);
                            trigger = true;                  
                          }
                      }

                      if(trigger)
                      {
                          this.foundMessage = "A username has been found, please check your email to reset your password."  
                      }
                      else
                      {
                          this.foundMessage = "A username was not found, please try again"
                      }
                   }
                   );
                    
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
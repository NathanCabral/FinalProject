<template>
    <form @submit.prevent="register" id="register">
        <label for="username"> Enter Username: </label>
        <input type="text" v-model="username" name="username" placeholder="Username"/>
        <label for="firstName"> First Name: </label>
        <input type="text" v-model="firstName" name="firstName" placeholder="First Name"/>
        <label for="lastName"> Last Name: </label>
        <input type="text" v-model="lastName" name="lastName" placeholder="Last Name"/>
        <label for="dateOfBirth"> Date of Birth </label>
        <input type="date" v-model="dateOfBirth" name="dateOfBirth"/>
        <label for="email"> Email: </label>
        <input type="text"  v-model="email" name="email" placeholder="Email"/>
        <label for="password"> Enter Password: </label>
        <input type="password" v-model="password" name="password" placeholder="Password"/>
        <div v-if="errorMessage"> {{errorMessage}} </div>
        <button class="btn"> Sign Up </button>

    </form>
</template>

<script>
    import { addPlayer, getPlayer } from '../services/services';
    export default {
        name: "RegisterForm",
        data(){
            return{
                username: "",
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                email: "",
                password: "",
                errorMessage: ""
            }
        },
        methods:{
            register(){
                console.log("Called Register")
                if(this.username == "" || this.firstName == "" || this.lastName == "" || this.dateOfBirth == "" || this.email == "" || this.password == ""){
                    this.errorMessage = "All fields required to register"
                }
                else{
                    const payload = {
                        username: this.username,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        dateOfBirth: this.dateOfBirth,
                        email: this.email,
                        password: this.password
                    }
                    addPlayer(payload).then(response => {
                        console.log(response)
                        //this.errorMessage = "successfully registered"
                    })
                    getPlayer(this.username, this.password).then(response =>{
                        console.log(response)
                        if(response != 0){
                            this.errorMessage = "Successfully Registered"
                            
                        }
                        else{
                            this.errorMessage = "Error Registering User, please try again"
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
    #register{
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
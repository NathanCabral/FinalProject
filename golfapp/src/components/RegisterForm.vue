<template>
    <form id="login">
        <label for="firstname"> First Name: </label>
        <input type="text" placeholder="First Name"/>
        <label for="lastname"> Last Name: </label>
        <input type="text" placeholder="Last Name"/>
        <label for="Email"> Email: </label>
        <input type="text"  placeholder="Email"/>
        <label for="username"> Enter Username: </label>
        <input type="text" v-model="username" name="username" placeholder="Username"/>

        <label for="password"> Enter Password: </label>
        <input type="password" v-model="password" name="password" placeholder="Password"/>
        <!-- <div v-if="errorMessage"> {{errorMessage}} </div> -->
        <button class="btn"> Login </button>

    </form>
</template>

<script>
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
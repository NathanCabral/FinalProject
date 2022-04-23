<template>
    <nav id="vue">
        <div class="menu-item"><router-link to="/">Home</router-link></div>
        <div class="menu-item"><router-link to="/register">Register</router-link></div>
        <div class="menu-item"><router-link to="/login">Login</router-link></div>
        <div class="menu-item"><router-link to="/contactus">Contact Us</router-link></div>
    </nav>
</template>

<script>
    // import auth from '../js/auth'
    // export default{
    //     name: 'AppNav',
    //     data() {
    //         return { isLoggedIn: auth.isLoggedIn()};
    //     },
    //     created(){
    //         auth.onLoginStatus = isLoggedIn =>{
    //             this.isLoggedIn = isLoggedIn;
    //         }
    //     },
    //     methods:{
    //         logout: function(){
    //             auth.logout( (res) =>{
    //                 console.log(res)
    //                 this.$router.replace('/login');
    //             });
    //         }
    //     }
    // }
</script>

<style>
nav {
  background-color: #c7d9be;
  display: flex;
  justify-content: center;
}
nav .menu-item {
  color: black;
  font-size: 1.5rem;
  padding: 20px 30px;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.2s;
}
nav .menu-item.router-link-active,
nav .menu-item:hover {
  background-color: #c7d9be;
  border-bottom-color: black;
  font-weight: bold;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>
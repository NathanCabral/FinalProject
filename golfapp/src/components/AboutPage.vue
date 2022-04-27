<template>
    <div>
      <div v-if="isLoggedIn" id = "info">
        <h1> Welcome to Oshawa Links! </h1>
        <p>
          Oshawa Links is about a community of golfers, to which we dedicate ourselves to providing the best courses and luxuries for our members.<br><br>

          The 18 hole course that is offered features loads of ponds, bridges, creeks, sandtraps and stunning views over the horizon.<br><br>
        </p>
        <h4>
          Online Services:
        </h4>
        <p>
          As a Member of this community, you can use our Online Tee Time Booking System to find the best Tee Times for yourself <br> 
          And also better plan your visits according to the weather with the help of our Weather Forecast 
        </p>
      </div>
      <div v-if="!isLoggedIn" id = "info">
        <h1> Welcome to Oshawa Links! </h1>
        <p>
          Oshawa Links is about a community of golfers, to which we dedicate ourselves to providing the best courses and luxuries for our members.<br><br>

          The 18 hole course that is offered features loads of ponds, bridges, creeks, sandtraps and stunning views over the horizon.<br><br>
        </p>
        <h4>
          Online Services:
        </h4>
        <p>
          Please Register/Login in order to use our tee time booking system, which will provide you with the best possible times to tee off!
        </p>
    </div>
    </div>
  </template>

<script>
    import auth from '../js/auth'
    export default {
        name: 'AboutPage',
        data() {
            return { 
              isLoggedIn: auth.isLoggedIn(),
              };
        },
        created(){
            auth.onLoginStatus = isLoggedIn =>{
                this.isLoggedIn = isLoggedIn;
            }
        },
        props:{
        }
    }
</script>

<style scoped>
  #info{
    margin-top: 50px;
  }
</style>
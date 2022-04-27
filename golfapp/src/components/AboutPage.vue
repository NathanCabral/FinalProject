<template>
    <div>
      <div v-if="isLoggedIn" id = "info">
        <!-- <div class = "column"> -->
        <h2> Welcome to Oshawa Links! </h2>
        <p>
          Oshawa Links is about a community of golfers, to which we dedicate ourselves to providing the best courses and luxuries for our members.<br><br>

          The 18 hole course that is offered features loads of ponds, bridges, creeks, sandtraps and stunning views over the horizon.<br><br>
        </p>
        <!-- </div> -->
      </div>
      <div class="picture1">
         <img src="../assets/GImage4.jpg" class="d-block w-100" alt="...">
      </div>

      <div v-if="isLoggedIn" id = "services">
        <!-- <div class = "column"> -->
        <h4>
          Online Services:
        </h4>
        <p>
          As a Member of this community, you can use our Online Tee Time Booking System to find the best Tee Times for yourself <br> 
          And also better plan your visits according to the weather with the help of our Weather Forecast 
        </p>
        <!-- </div> -->
      </div>
      <div class = "footer">
        <div class="row">
        <div class="column">
          <h5>Contact</h5>
            <br><a href="mailto: support@OshawaLinks.com">support@OshawaLinks.com</a><br><br>
            <p> 905-123-4567</p>
        </div>
        <div class="column"></div>
          <h5>Address</h5>
            <p> Oshawa Airport Golf Club </p><br>
            <p> 1145 Thornton Rd N </p><br>
            <p> Oshawa, ON</p><br>
            <p> L1H 7K4 </p>
        <div class="column"></div>
          <h5> Our Team</h5>
            <p> Nathan Cabral: Club Director </p>
            <p> Alexander Giannoulis: Event Director </p>
            <p> Sejal Shingal: F&B Manager </p>
        </div>
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
    width: 100%;
    border: 5px solid #c28530;
    padding: 5px;
    margin: auto;
    background-color: #E4E4D9;
    background-image: linear-gradient(175deg, rgba(0,0,0,0) 95%, #c7d9be 95%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 95%, #c7d9be 95%),
                    linear-gradient(175deg, rgba(0,0,0,0) 90%, #c7d9be 90%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 92%, #c7d9be 92%),
                    linear-gradient(175deg, rgba(0,0,0,0) 85%, #c7d9be 85%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 89%, #c7d9be 89%),
                    linear-gradient(175deg, rgba(0,0,0,0) 80%, #c7d9be 80%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 86%, #c7d9be 86%),
                    linear-gradient(175deg, rgba(0,0,0,0) 75%, #c7d9be 75%);

}
  
  #services{
    width: 100%;
    border: 5px solid #c28530;
    padding: 40px;
    margin: auto;

    background-color: #E4E4D9;
      background-image: linear-gradient(175deg, rgba(0,0,0,0) 95%, #c7d9be 95%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 95%, #c7d9be 95%),
                    linear-gradient(175deg, rgba(0,0,0,0) 90%, #c7d9be 90%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 92%, #c7d9be 92%),
                    linear-gradient(175deg, rgba(0,0,0,0) 85%, #c7d9be 85%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 89%, #c7d9be 89%),
                    linear-gradient(175deg, rgba(0,0,0,0) 80%, #c7d9be 80%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 86%, #c7d9be 86%),
                    linear-gradient(175deg, rgba(0,0,0,0) 75%, #c7d9be 75%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 83%, #c7d9be 83%),
                    linear-gradient(175deg, rgba(0,0,0,0) 70%, #c7d9be 70%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 80%, #c7d9be 80%);
    
  }

  .footer {
    position: absolute;
    padding: 10px 10px 0px 10px;
    width: 100%;
    /* Height of the footer*/ 
    height: 300px;
    background: lightgrey;
    border-left: 5px solid #c28530;
    border-right: 5px solid #c28530;
}
  .picture1{
    border-left: 5px solid #c28530;
    border-right: 5px solid #c28530;

  }
	.column {
    flex: 33.33%;
    height: 200px;
    padding: 10px;
    margin: 5px;
    background-color: #cccccc;
    text-align: center;
	}


  
</style>
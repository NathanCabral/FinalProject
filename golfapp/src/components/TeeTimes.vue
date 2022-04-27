<<<<<<< HEAD
=======
<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from "@fullcalendar/list"
import auth from '../js/auth'
import { addChosen } from '../services/services'

!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0];
  if(!d.getElementById(id)){
    js=d.createElement(s);
    js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
    fjs.parentNode.insertBefore(js,fjs);
  }
}(document,'script','weatherwidget-io-js');
export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      currentUser: auth.getUser(),
      title: "",
      bookingMessage: "",
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin ],
        initialView: 'listWeek',
        displayEventTime: true,
        eventDisplay: "block",
        events: {
          url: "http://localhost:8080/api/games"
        }
        
        // events: [
        //   { title: 'event 1', start: '2022-04-01T16:30:00', end: '2022-04-01T19:30:00'},
        //   { _id:"62697c415a7a597e30bdf3cd", title :"1", start:"2022-04-23T12:00:00.000Z", end:"2022-04-23T14:00:00.000Z",courseID:"1"}
        // ]
      }
    }
  },
  methods: {
    event(){
      let game = this.title;
      console.log(this.currentUser, game)
      const payload = {
        gameID: game,
        username: this.currentUser
      }
      var out = addChosen(payload)
      console.log(out)
      this.bookingMessage = "Game Booked, Please refer to 'My Bookings'"
    }
    
  }
}
</script>
<template>
  <div id ="container"> 
    <div class="column left">
      <FullCalendar :options="calendarOptions" id = "calendar"/>
    </div>
    <div class="column right">
      <form @submit.prevent="event" id ="event">
      <label for="title"> Event Name: </label>
      <input type="text" v-model="title" name="title" placeholder="Event Name"/>
      <div> {{bookingMessage}} </div>
      <button class="btn"> Book </button>
      </form>
      <a class="weatherwidget-io" href="https://forecast7.com/en/43d90n78d87/oshawa/" 
      data-label_1="OSHAWA" data-label_2="WEATHER" data-font="Noto Sans" data-icons="Climacons" 
      data-theme="orange" data-basecolor="#c28530" data-textcolor="#020925" data-highcolor="#fffc41" 
      data-lowcolor="#6adff5" data-suncolor="#fffc41" data-raincolor="#6adff5" >OSHAWA WEATHER</a>
    </div>
  </div>
</template>
<style scoped>
  .column {
    float: left;
    padding: 10px;
  }
  .left {
    width: 80%;
  }

  .right {
    width: 20%;
  }
  #calendar{
    margin: 20px;
    padding: 10px;
  }
  #event{
    margin-top:50px;
  }
  label{
    display: block;
    font-weight: bold;
    margin-top: 10px;
    box-sizing: border-box;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    width: 306px;
  }
  input{
    padding: 12px 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    width: 306px;
    margin-left: auto;
    margin-right: auto;
  }
  .btn {
    font-weight: bold;
    background-color: #c7d9be;
    color:  black;
    padding: 14px 20px;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    display: block;
    width: 306px;
    margin-left: auto;
    margin-right: auto;
  } 

  .weatherwidget-io{
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 306px;
  }
</style>


<script>

</script>
>>>>>>> 43abfd44c88413c37dc88bd952112c3219ef11ef

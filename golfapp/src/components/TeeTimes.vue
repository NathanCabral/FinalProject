<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar, { CalendarApi } from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from "@fullcalendar/list";

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      title: "",
      date: "",
      time: "",
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin ],
        initialView: 'listWeek',
        displayEventTime: true,
        eventDisplay: "block",
  
        events: [
          { title: 'event 1', start: '2022-04-01T16:30:00', end: '2022-04-01T19:30:00'},
          { title: 'event 2', date: '2022-04-02' }
        ]
      }
    }
  },
  methods: {
    event(){
      CalendarApi.addEvent(this.title, this.date)
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
      <label for="Date"> Date: </label>
      <input type="date" v-model="date" name="date"/>
      <label for="time"> Time: </label>
      <input type="time" v-model="time" name="time"/>
      <button class="btn"> Book </button>
      </form>
    </div>
  </div>
</template>
<style scoped>
  .column {
    float: left;
    padding: 10px;
  }
  .left {
    width: 75%;
  }

  .right {
    width: 25%;
  }
  #calendar{
    margin: 20px;
    padding: 10px;
  }
  #event{
    margin-top:50px;
    margin-right: 30px;
  }
  label{
    display: block;
    font-weight: bold;
    margin-top: 10px;

    box-sizing: border-box;
    text-align: left;
    margin: auto;
    width: 100%;
  }
  input{
    padding: 12px 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    width: 100%;
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
    width: 100%;
  } 
</style>
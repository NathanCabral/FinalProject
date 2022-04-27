<template>
    <Bookings :bookings="bookingInfo" />
</template>


<script>
import Bookings from '../components/MyBookings.vue'
import auth from '../js/auth'
const axios = require('axios');

export default {
  name: 'BookingView', 
  components:{
    Bookings,
  },
  data(){
    return{
      gamesList: [],
      bookingInfo: [],
      userName: auth.getUser(),
    };
  },
  created:function(){
    var url = 'api/chosenGames' + '/' + this.userName;
    var x;
    axios.get(url).then((result) => {
      for(x in result.data){
        this.gamesList.push(result.data[x].gameID)
      }
      //console.log(this.gamesList)
      var i;
      for (i = 0; i < this.gamesList.length; i++){

        var url2 = 'api/game' + '/' + this.gamesList[i];
        axios.get(url2).then((res) => {
          //console.log(res.data)
          this.bookingInfo.push(res.data)
          console.log(this.bookingInfo)
        })
      }
    })
  }
}
</script>
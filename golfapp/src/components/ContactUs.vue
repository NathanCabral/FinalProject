<template>
    <div class="rows">
        <div class="columns">
            <h3> Our Location </h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2873.9057354527554!2d-78.90734758427065!3d43.91992564315963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51c6c7b07cce1%3A0x99ce6f10c767770e!2sOshawa%20Airport%20Golf%20Club!5e0!3m2!1sen!2sca!4v1650857665835!5m2!1sen!2sca" width="800" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="columns">
            <h3> Contact Us </h3>
            <h5> Oshawa Links Golf Course </h5> 
            <p> 2400 Ritson Road North <br>
            Oshawa, Ontario L1H 8L7 <br>
            Phone: (905) xxx-xxxx</p>
            
            <p> Customer Support: <a href="mailto:support@oshawalinks.com">support@oshawalinks.com</a> </p>
            <h3> Hours of Operation </h3>
            <p> <strong> Monday to Friday:</strong> 9:00am to 8:00pm<br>
            <strong> Saturday and Sunday:</strong> 11:00am to 11:00pm<br>
            </p>
        </div>
    </div>
  </template>

<script>
    export default {
        name: 'AboutPage',
        props:{
        }
    }
</script>

<style scoped>
    .rows {
        display: flex;
    }
    .columns {
        flex: 50%;
        padding-bottom: 5%;
    }
    h3{
        padding-left: 2%;
        padding-top: 5%;
        text-align: center;
    }
    p,h5{
        text-align: center;
        padding-left: 2%;
    }
</style>
<template>
    <div>
    <h2> My Booked Games </h2>
    <div v-for="info in bookings" :key="info.title">
        <strong> Game number: </strong>{{info.title}} <br>
        <strong> Start Date: </strong>{{info.start}} <br>
        <strong> End Date: </strong>{{info.end}} <br>
    </div>
    </div>
</template>

<script>
export default {
    name: 'MyBookings',
    props:{
        bookings: Array
    },
}
</script>

<style scoped>

</style>
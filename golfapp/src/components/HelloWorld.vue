<template>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/logo.png" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="../assets/logo.png" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="../assets/logo.png" class="d-block w-100">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  height: 300px;
  width: 500px;
}
</style>

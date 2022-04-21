<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #92b580">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Oshawa Links</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Register</a>
            <a class="nav-link" href="#">Login</a>
            <a class="nav-link" href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/GImage1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/GImage2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/GImage3.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div id = "info">
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
export default {
  name: 'HelloWorld',
  props: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img{
  height: 336px;
}
nav{
  font-weight: bold;
}
#info{
  margin-top: 50px;
}

</style>

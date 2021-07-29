<template>
  <div id="nav">
 
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#"><strong>Project-Bike</strong></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="/home"><router-link to="/">Home</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/propuestas">Propuestas</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/artbike">ArtBike</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/infobike">InfoBike</router-link></a>
        </li>
          <li class="nav-item">
          <a class="nav-link"><router-link to="/login">Iniciar Sesión</router-link></a>
        </li>
      </ul>
    </div>
         <div class="d-grid gap-2 d-md-flex justify-content-md-end">
       <button class="btn btn-primary me-md-2" type="button"><a><router-link to="/login">Iniciar Sesión</router-link></a></button>
       </div>
  </div>
</nav>
<router-view/>
<footer class="bg-dark text-center text-white">
  <!-- Grid container -->
  <div class="container p-4 pb-0">
    <!-- Section: Social media -->
    <section class="mb-4">
      <!-- Facebook -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <!-- Twitter -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Instagram -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      <!-- Linkedin -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

      <!-- Github -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    <!-- Section: Social media -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  <!-- Copyright -->
</footer>
  </div>

</template>

<style lang="scss">
#app {
  text-align: center;
}

.button{
  display: flex;
  justify-content: flex-end;
  
 
}
.button button{
   background: orangered;
   border-radius: 20px;
   border:black solid 3px;
   margin-left:50vh;
   

}

</style>

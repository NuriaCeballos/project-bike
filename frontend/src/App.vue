<template>
  <div id="nav">
 
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
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
  </div>
</nav>
<router-view/>
  </div>


   







  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

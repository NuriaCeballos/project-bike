
<template>

<div class="slider">

      
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/bici2.jpg" class="d-block w-100" alt="">
    </div>
    <div class="carousel-item">
      <img src="@/assets/bici10.jpg" class="d-block w-100" alt="">
    </div>
    <div class="carousel-item">
      <img src="@/assets/bici17.jpg" class="d-block w-100" alt="">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    

</div>

</template>

<script>
import {ref} from 'vue'

export default {
     name: 'Slider',
  props: {
    
  },
  setup(){
    let texto= "AQUÍ VA EL SLIDER"
  /*  const images= ref([
      {
      id:1,url: require('../assets/bici1.jpg'), name: 'foto1',
      },
       {
      id:2,url:require('../assets/bici3.jpg'), name: 'foto2',
      },
       {
      id:3,url:require('../assets/bici4.jpg'), name: 'foto3',
      },
    ])
      return {
        texto,
        images
      }*/
  }
 

}
</script>

<style lang="scss" scoped>
img{
  max-height: 400px;
  
  
}

</style>>


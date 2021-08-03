
<template>

<div>

      <img v-for= "image in images" :key="image.id" :src="image.url" class="d-block w-100" :alt="image.name" width="200px">
    
      
    <pre>
      {{images}}
    </pre>
    

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
    const images= ref([
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
      }
  }
 

}
</script>

<style lang="scss" scoped>

</style>>


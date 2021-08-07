<template>
<div class="pruebacomp">
    <select v-model="optionSeleccionada" @change="optionMostrada">
        <option v-for="(elem,i) in elementos" :key="i" :value="elem.imagen">{{elem.nombre}}</option>    
    </select>
        <img class="imagen" :src="optionSeleccionada">
        
</div>
</template>


<script>
import {ref} from 'vue'
export default{
    name: "Pruebacomp",
    props: {
    
  },
  setup(){
      let optionSeleccionada=ref("")
      let elementos=ref([
          {id:1, nombre:"bici al rio",imagen:require("@/assets/bici10.jpg")},
          {id:2, nombre: "montando en el embalse",imagen:require("@/assets/bici11.jpg")},
          {id:3, nombre: "bici antigüa",imagen:require("@/assets/bici12.jpg")},
          {id:4, nombre: "mtb en el monte",imagen:require("@/assets/bici13.jpg")}
      ])

      function optionMostrada(){
          
      }
      return {
          optionSeleccionada,optionMostrada,elementos
      }

  }
}

</script>
<style>
.imagen{
    width: 50vh;
    height: auto;
}
</style>
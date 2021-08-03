<template>
<div>
  <div class="prueba">
      <h1>Store</h1>
      <input v-model="nombre" placeholder="nombre">
      <input v-model="apellidos" placeholder="apellidos">
      <div>
      <button class="btn btn-primary" @click="login">Login</button>
      <button class="btn btn-danger" @click="logout">Logout</button>
      <button class="btn btn-warning" @click="aleatorio">Aleatorio</button>  
    </div>
  
  <div><Userdata/></div>
  </div>
  </div>
</template>
<script>

import Userdata from '@/components/Userdata'
import {ref,reactive,computed} from 'vue'

export default {
    name:'Store',
    components: {
      Userdata
       
    },
    props:{},
    setup(){
        let nombre=ref("")
        let apellidos= ref("")
        function login(){
            

        }
        function logout(){
            
        }
        function aleatorio(){
            
        }

        return{
            nombre,
            apellidos,
            login,
            logout,
            aleatorio
        }

    }
    
    
}

</script>

<style lang="scss" scoped>
  .prueba{
    background: rgb(113, 161, 161);
    border-radius: 20px;
    
  }
  button,input {
    margin:10px;
  }
 
  
</style>
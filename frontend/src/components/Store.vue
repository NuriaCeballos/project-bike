<template>
  <div class="prueba">
      <input v-model="nombre" placeholder="nombre">
      <input v-model="apellidos" placeholder="apellidos">
    <h1>Store</h1>
    <div><Userdata/></div>
  </div>
</template>
<script>

import Userdata from '@/components/Userdata'
export default {
    name:'Store',
    components: {
      Userdata
    },
    props:{},
    
    
}

</script>

<style lang="scss" scoped>
  .prueba{
    background: aqua;
  }
 
  
</style>
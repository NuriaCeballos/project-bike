<template>
<div class ="rutas">
  <h1>Rutas</h1>
  <PropuestasComponent/>
  
  </div>
</template>

<script>
import PropuestasComponent from '@/components/PropuestasComponent.vue'

export default {
     name: "Rutas",
    components: {
    PropuestasComponent
  },
 
}
</script>

<style lang="scss" scoped>

</style>
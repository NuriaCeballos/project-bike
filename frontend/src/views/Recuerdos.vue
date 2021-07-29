<template>
<div class ="recuerdos">
  <h1>Recuerdos</h1>
  <PropuestasComponent/>
  </div>
</template>

<script>
import PropuestasComponent from '@/components/PropuestasComponent.vue'

export default {
     name: "Recuerdos",
    components: {
    PropuestasComponent
  },
 
}
</script>

<style lang="scss" scoped>

</style>
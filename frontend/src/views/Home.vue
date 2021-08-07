<template>
  <div class="home">
    
    <Slider/>
    <Texthome/>
  </div>
</template>

<script>

import Slider from "@/components/Slider.vue"
import Texthome from "@/components/Texthome"
export default {
  name: 'Home',
  components: {
    Slider,
    Texthome
    
  }
}
</script>

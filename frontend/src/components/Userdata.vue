<template>

   
    <h3>{{nombre}} {{apellidos}} Userdata</h3>
    
</template>
<script>
import {ref} from 'vue'
export default {
    name: "Userdata",
    props:{},
    setup(){
        let nombre=ref('')
        let apellidos=ref('')
        return{
            nombre,
            apellidos
        }
    }
    
}
</script>
<style lang="scss" scoped>
h3{
    color: red;
}

</style>

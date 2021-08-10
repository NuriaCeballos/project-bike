<template>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button @click="enviar" class="btn btn-primary me-md-2" type="button" src="/login">sube algo</button>
       </div>
</template>

<script>
export default {
    name:"Button",
    setup(){
        const enviar = () => {
            return window.open("http://localhost:8080/formcard")
            
        }
        return{
                enviar
        }
    }
}
</script>


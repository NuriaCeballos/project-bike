<template>
<div>
<div class= "ranking">
  Aqui van las estrellas de la valoración
</div>

  <div class="nickname">
    <h2>Nickname</h2>
  </div>
<div class="container">
    <div class ="row">
      <div class="photo">
        <h1 class=" title">Aqui van las fotos</h1>
        </div>
    </div>
    <div>
      <h2>Titulo</h2>
    </div>
    <div>
      <textarea>
        Descripción
      </textarea>
    </div>
    <div>
       <a href="#">Comentarios</a>
    </div>
</div>
</div>
  
</template>

<script>
export default {
    
  name: 'PropuestasComponent',
  props: {
      setup() {
    return {};
  },
   
  },

}
</script>

<style lang="scss" scoped>
.photo{
  
  background: chartreuse;
}

</style>
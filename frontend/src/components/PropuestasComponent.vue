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
    <div class="titulo">
      <h2>Título</h2>
    </div>
    <div class="textarea">
      <textarea>
        Descripción
      </textarea>
    </div>
    <div class="comentarios">
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
.nickname{
  display:flex;
  justify-content: flex-end;
  
  
  
}
.nickname h2{
  background: chocolate;
  
}
.titulo{
  display: flex;
  
}
.titulo h2{
  background: darkgoldenrod;
}
.textarea{
  display: flex;
  justify-content: center;
}
.textarea textarea{
  width: 240vh;
  height: 40vh;
}
.comentarios{
  display: flex;
  
}
.comentarios a{
  background:crimson;
  padding: 2vh;
  margin-bottom:6vh;
}

</style>
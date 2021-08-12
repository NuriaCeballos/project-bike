<template>
<div class="form">
    <form class="form">
        <div>
        <select>
            <option>Rutas</option>
            <option>Comprar y vender</option>
            <option>Recursos Bike</option>
        </select>
        </div>
        <!-- <input name="ranking" type="number" placeholder="ranking"><br> es otro componente-->
       <div> <input name="nickname" type="text" placeholder="Nickname"></div>
        <div class="photo">Espacio para la foto</div>
        <div><textarea name="description"></textarea></div>
        <!-- <textarea name="comentarios"></textarea>  es otro componente-->
    </form>

</div>
  
</template>

<script>
import {ref,reactive} from 'vue'
export default {
    name:"Formcard",
    props:{}, 
    setup(){
        let tema = reactive["Rutas","Comprar y vender","Recuerdos Bike"]
        let nickname= ref("")
        let photo= ref("")
        let description= ref("")
        return{
            tema,nickname,photo,description
        }

    }   
}
</script>

<style lang="scss" scoped>

.form{
    display:flex;
    align-items: center;
    background: rgb(228, 157, 64);
    padding:30px;
    flex-direction: column;
    margin: 500px;
    margin-top: 20px;
    margin-bottom: 20px;

}
.form div{
    background-color:white;
    width: 190px;
    margin: 30px;

    
    
}

</style>


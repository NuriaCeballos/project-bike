<template>
<div class="form">
    
        <div>
        <select v-model="temaseleccionado">
            <option v-for="(tem,i) in temas" :key="i">{{tem.tema}}</option>
            
        </select>
        </div> 
        <!-- <input name="ranking" type="number" placeholder="ranking"><br> es otro componente-->
        <div> <input v-model="nickname" type="text" placeholder="Nickname"></div>
        <div>
        <!-- <input type="file" accept=".jpg" @click="photoUp" name="photo"> -->

        
        </div>
        <div><textarea v-model="description" ></textarea></div> 
        <!-- <textarea name="comentarios"></textarea>  es otro componente-->
       <button type="submit" @click="enviar">Enviar</button>
</div>
  
</template>

<script>

import {ref} from 'vue'
export default {
    name:"Formcard",
    props:{}, 
    setup(){
        let photo=ref("")
        let temaseleccionado=ref("")
        let nickname= ref("")
        let file=ref("")
        let description= ref("")
        let temas =[
            {id:1,tema:"Rutas"},
            {id:2,tema:"Comprar y vender"},
            {id:3,tema:"Recuerdos Bike"}]
        
           
        
            function enviar(){
            console.log(temaseleccionado.value,nickname.value,photo.value,description.value)
            fetch('http://localhost:3001/card/guardar',{
                method: 'POST',
                body: JSON.stringify({
                    title: temaseleccionado.value,
                    nickname: nickname.value,
                    photo: photo.value,
                    description: description.value   

                }),
                headers: {'Content-Type':'application/json'}
            }).then(resp=>resp.json())
                .then(datos=>console.log(datos))
        }


        
        return{
            temas,nickname,description,temaseleccionado,enviar,file,photo
            // photoUp
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
    margin: 200px;
    margin-top: 20px;
    margin-bottom: 20px;

}
.form div{
    background-color:white;
    width: 190px;
    margin: 30px;
 
    
}
img{
    max-width: 200px;
}

</style>


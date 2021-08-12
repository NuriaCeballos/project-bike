<template>
<div class="form">
    <!-- <form class="form">
        <div>
        <select v-model="temaseleccionado">
            <option v-for="(tem,i) in temas" :key="i">{{tem.tema}}</option>
            
        </select>
        </div> -->
        <!-- <input name="ranking" type="number" placeholder="ranking"><br> es otro componente-->
       <!-- <div> <input v-model="nickname" type="text" placeholder="Nickname"></div>
        <div>
        <img class="photo" src="@/assets/bici8.jpg">
        </div>
        <div><textarea v-model="description" ></textarea></div> -->
        <!-- <textarea name="comentarios"></textarea>  es otro componente-->
        <!-- <div><button type="submit" @click="enviar">Enviar</button></div>
    </form> -->

    <h1>Prueba</h1>
    Nombre <input v-model="nombre">
    Apellido <input v-model="apellido">
    <button @click="enviar">Enviar</button>
</div>
  
</template>

<script>
import {ref} from 'vue'
export default {
    name:"Formcard",
    props:{}, 
    setup(){
        //  let temaseleccionado=ref("")
        // let nickname= ref("")
        // let photo= ref("")
        // let description= ref("")

        // let temas =[
        //     {id:1,tema:"Rutas"},
        //     {id:2,tema:"Comprar y vender"},
        //     {id:3,tema:"Recuerdos Bike"}]

        let nombre=ref('')
        let apellido=ref('')

        // function enviar(){
        //     console.log(nombre.value,apellido.value)
        //     fetch("http://localhost:3001/card/guardar",{
        //         method:'POST',
        //         body:JSON.stringify({
        //             nombre:nombre.value,
        //             apellido:apellido.value

        //         }),
        //         headers:{'Content-Type':'application/json'}

        //     }).then (resp=>resp.json())
        //         .then (datos=>console.log(datos))
        // }
            function enviar(){
            console.log(nombre.value,apellido.value)
            fetch('http://localhost:3001/card/guardar',{
                method: 'POST',
                body: JSON.stringify({
                    nombre: nombre.value,
                    apellido: apellido.value,
                    

                }),
                headers: {'Content-Type':'application/json'}
            }).then(resp=>resp.json())
                .then(datos=>console.log(datos))
        }


        
        return{
            // temas,nickname,photo,description,temaseleccionado,enviar
            nombre,apellido,enviar
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
img{
    max-width: 200px;
}

</style>


<template>
<div class="form">
    <form>
        <select>
            <option>Rutas</option>
            <option>Comprar y vender</option>
            <option>Recursos Bike</option>
        </select>
        <input name="ranking" type="number" placeholder="ranking"><br>
        <input name="nickname" type="text" placeholder="Nickname">
        <div class="photo">Espacio para la foto</div>
        <textarea name="description"></textarea>
        
    </form>

</div>
  
</template>

<script>
export default {
    name:"Formcard"

}
</script>

<style lang="scss" scoped>
div.photo{
    background: bisque;
    width: 550px;
    height: 200px;
}
form{
    display:flex;
}

</style>


<template>
  <div id="app">
    <Navigation/>
    <router-view/>
    <Pied/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Pied from "./components/Pied";
export default {
  name: 'App',
  components: {Navigation,Pied},
}
</script>
<style>
#app {
  background-color: #dfe6e9;
}
* {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: "AkayaKanadaka";
  src: url("assets/fonts/AkayaKanadaka-Regular.ttf") format("ttf")
}
@font-face {
  font-family: "TitilliumWeb";
  src: url("assets/fonts/TitilliumWeb-Regular.ttf") format("ttf")
}
</style>

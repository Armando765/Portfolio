<template>
  <div>

    <div class="menuToggle" @click="ToggleMenu()"></div>
    <div class="navigation">
      <div class="navArea">
        <ul>
          <li>
            <a href="index.html">Accueil</a>
          </li>
          <li>
            <router-link to="/Apropos">
              A Propos
            </router-link>
          </li>
          <li>
            <router-link to="/Projets">
              Projets
            </router-link>
          </li>
        </ul>
      </div>
      <div class="imgArea">
        <img src="../assets/img/armandoaccueil.jpg" id="slider" alt="slider">
      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'Navigation',

  methods : {

    ToggleMenu: function (Opacite) {
      const menuToggle = document.querySelector('.menuToggle');
      const navigation = document.querySelector('.navigation');
      menuToggle.classList.toggle('active')
      navigation.classList.toggle('active')


    },
  }
}




</script>

<style>
/*css menu navigation*/

.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: black;
  transition: 0.2s;
  display: flex;
  visibility: hidden;
  opacity: 0;
  font-family: "AkayaKanadaka", sans-serif;
}
.navigation.active {
  visibility: visible;
  opacity: 1;
  z-index: 1000;
}
.navigation .navArea {
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navigation .navArea ul li {
  list-style: none;
  margin: 50px;
}
.navigation .navArea ul li:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
  transition: 0.5s;
}

.navigation .navArea ul li:hover:before {
  opacity: 1;
}
.navigation .navArea ul li a {
  font-size: 3em;
  font-weight: 600;
  text-decoration: none;
  color: rgba(255,255,255, 0.5);
}
.navigation .navArea ul li:hover a {
  color: rgba(255,255,255,1);
}
.imgArea {
  position: relative;
  width: 50%;
  height: 100vh;
  background: #2d3436;
}
.imgArea img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menuToggle {
  position: fixed;
  top: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  background: #000 url("../assets/img/menu.png");
  z-index: 9999;
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}
.menuToggle.active {
  background: #000 url("../assets/img/close.png");
  z-index: 9999;
  background-size: 25px;
  background-repeat: no-repeat;
  background-position: center;
  filter: invert(1);
}

@media (max-width: 830px) {
  .navigation .navArea {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
  .imgArea {
    position: absolute;
    width: 100%;
    height: 100%;
    background: red;
    opacity: 0.5;
  }
  .navigation .navArea ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .navigation .navArea ul li {
    background: white;
    margin: 5px 10px;
    padding: 5px 10px;
  }
  .navigation .navArea ul li:hover {
    background: #2d3436;
  }
  .navigation .navArea ul li:hover::before {
    opacity: 0;
  }
  .navigation .navArea ul li a {
    color: #000;
    font-size: 2em;
    letter-spacing: 2px;
  }
}
@media screen and (max-width:400px) {
  .menuToggle {
    position: fixed;
    left: 20px;
    width: 45px;
    height: 45px;
  }
}
</style>

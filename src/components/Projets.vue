<template>
    <div>
      <header>
        <h1 class="anim">Mes projets</h1>
        <p class="types">Découvrez ici tout mes projets personnel et professionnel.</p>
        <p>Que ce soit de la conception de site web jusqu'à de la modélisation 3D,
          tout se trouve ici.</p>
      </header>

      <div class="filtre">
      <button
        v-for="(entry, index) in filterList"
        :item="entry"
        :key="index"
        @click="filter = entry;"
        :class="{ active: entry == filter }"
      >
        {{ entry }}
      </button>
      </div>

      <div class="place">
        <div class="carte" v-for="(entry) in listeProjets"
             v-if="entry[fkey] === filter || filter === 'Tout les projets'"
             :item="entry">
          <div class="imageprojet"><img :src="entry.img" alt=""></div>
          <div class="infos">
            <div class="content">
              <h3>{{entry.nom}}<br></h3>
              <span class="spandetail">
                  {{entry.description}}
              </span><br>
              <router-link to="/Details" class="lienprojet">
                Details
              </router-link>
            </div>
          </div>
        </div>
      </div>





    </div>
</template>
<script>
import axios from "axios"
export default {
  name: 'App',
  data () {
    return {
      fkey: "type",
      filterList: ["Developpement", "Design", "3D","Tout les projets"],
      filter: "All",
      listeProjets : []
    }
  },
  created(){

    axios.get('static/Projets.json')
      .then(function (response) {

        console.log(response.data);
        this.listeProjets = response.data;

      }.bind(this))
      .catch(function (error) {
        //erreur//
        console.log(error);
      })
  },
}
</script>
<style>
.filtre {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
}
.filtre > button {
  padding: 15px;
  margin: 25px;
  width: 150px;
  height: 60px;
  font-family: "AkayaKanadaka", sans-serif;
  font-size: 1em;
  border: none;
  border-radius: 25px;
  background-color: #2d3436;
  color: #dfe6e9;
  cursor: pointer;
}
.anim {
  color: #2d3436;
  font-family: "AkayaKanadaka", sans-serif;
  font-size: 3em;
}
.types {
  font-size: 2em;
  color: #2d3436;
}
header {
  margin: 0 0 200px 120px;
  padding-top: 100px;
}

header p {
  width: 60%;
  margin-top: 10px;
}

.place {
  width: 100%;
  display: flex;
  justify-content: center;

  flex-direction: row;
  flex-wrap: wrap;
}
.carte {
  margin: 2%;
  width: 400px;
  height: 260px;
  background: #262626;
  position: relative;
  transition: .5s;
}
.carte .imageprojet {
  width: 100%;
  height: 100%;
  transform-origin: bottom;
  transition: .5s;
  transform: translateY(0) rotateX(0deg);
}
.carte:hover .imageprojet {
  transform: translateY(-100%) rotateX(90deg);
}
.carte .infos {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #2d3436;
  transform-origin: top;
  transition: .5s;
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
  transform: translateY(100%) rotateX(-90deg);
}
.carte:hover .infos {
  transform: translateY(0) rotateX(0deg);
}
.carte .infos .content {
  position: absolute;
  top: 50%;
  left: 10%;
  width: 80%;
  height: 50%;
  transform: translateY(-50%);
  margin-bottom: 100px;
}
.carte .infos .content  h3{
  text-transform: uppercase;
  font-family: "AkayaKanadaka", sans-serif;
  color: #dfe6e9;
  font-size: 1.5em;
  margin-bottom: 25px;
}
.spandetail {
  font-size: 14px;
  color: #dfe6e9;
  font-family: "TitilliumWeb", sans-serif;
  width: 50%;
  line-height: 1.3em;
}
.lienprojet {
  font-family: "TitilliumWeb", sans-serif;
  font-size: 1.2em;
  text-decoration: none;
  color: #2d3436;
  background-color: #dfe6e9;
  padding: 10px 20px 10px 20px;
  border-radius: 25px;
  text-align: center;
  position: absolute;
  bottom: -30px;
  left: 35%;
  transition: .5s;
}
.lienprojet:hover {
  transform: scale(1.05);
}
header > p {
  font-family: "TitilliumWeb", sans-serif;
  font-size: 1.3em;
}
.titre {
  font-size: 3em;
  text-align: center;
  font-family: "AkayaKanadaka", sans-serif;
  color: #2d3436;
  margin: 100px;
}

@media screen and (max-width:830px) {
  .filtre {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 100px;
  }
  .filtre > button {
    padding: 10px;
    margin: 25px;
    width: 150px;
    height: 60px;
    font-family: "AkayaKanadaka", sans-serif;
    font-size: 16px;
    border: none;
    border-radius: 25px;
    background-color: #2d3436;
    color: #dfe6e9;
    cursor: pointer;
  }
  .anim {
    color: #2d3436;
    font-family: "AkayaKanadaka", sans-serif;
    font-size: 3em;
    margin-bottom: 50px;
  }
  .types {
    font-size: 1.5em;
    color: #2d3436;
  }
  header {
    margin: 0 0 150px 120px;
    padding-top: 100px;
  }

  header p {
    width: 75%;
    margin-top: 10px;
  }

  .place {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
  .carte {
    width: 350px;
    height: 350px;
    background: #262626;
    position: relative;
  }
  .imageprojet > img {
    width: 350px;
    height: 350px;
  }
  .carte .infos {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: #2d3436;
    transform-origin: top;
    transition: .5s;
    box-sizing: border-box;
    padding: 20px;
    text-align: center;
    transform: translateY(100%) rotateX(-90deg);
  }
  .carte:hover .infos {
    transform: translateY(0) rotateX(0deg);
  }
  .carte .infos .content {
    position: absolute;
    top: 50%;
    left: 10%;
    width: 80%;
    height: 50%;
    transform: translateY(-50%);
    margin-bottom: 100px;
  }
  .carte .infos .content  h3{
    text-transform: uppercase;
    font-family: "AkayaKanadaka", sans-serif;
    color: #dfe6e9;
    font-size: 1.5em;
    margin-bottom: 50px;
  }
  .spandetail {
    font-size: 15px;
    color: #dfe6e9;
    font-family: "TitilliumWeb", sans-serif;
    width: 50%;
    line-height: 1.3em;
  }
  .lienprojet {
    font-family: "TitilliumWeb", sans-serif;
    font-size: 1em;
    text-decoration: none;
    color: #2d3436;
    background-color: #dfe6e9;
    padding: 10px 20px 10px 20px;
    border-radius: 25px;
    text-align: center;
    position: absolute;
    bottom: -40px;
    left: 35%;
    transition: .5s;
  }
  .lienprojet:hover {
    transform: scale(1);
  }
  .titre {
    font-size: 2.2em;
  }
}

@media screen and (max-width:400px) {
  .anim {
    font-size: 2.5em;
  }
  .types {
    font-size: 1.3em;
    color: #2d3436;
  }
  header {
    margin: 0 0 150px 75px;
    padding-top: 100px;
  }

  header p {
    width: 75%;
    margin-top: 10px;
  }

  .place {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
  .carte {
    width: 300px;
    height: 300px;
    background: #262626;
    position: relative;
  }
  .imageprojet > img {
    width: 300px;
    height: 300px;
  }
  .carte .infos {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: #2d3436;
    transform-origin: top;
    transition: .5s;
    box-sizing: border-box;
    padding: 20px;
    text-align: center;
    transform: translateY(100%) rotateX(-90deg);
  }
  .carte:hover .infos {
    transform: translateY(0) rotateX(0deg);
  }
  .carte .infos .content {
    position: absolute;
    top: 50%;
    left: 10%;
    width: 80%;
    height: 50%;
    transform: translateY(-50%);
    margin-bottom: 100px;
  }
  .carte .infos .content  h3{
    text-transform: uppercase;
    font-family: "AkayaKanadaka", sans-serif;
    color: #dfe6e9;
    font-size: 1.3em;
    margin-bottom: 20px;
  }
  .spandetail {
    font-size: 16px;
    color: #dfe6e9;
    font-family: "TitilliumWeb", sans-serif;
    width: 50%;
    line-height: 1.3em;
  }
  .lienprojet {
    font-family: "TitilliumWeb", sans-serif;
    font-size: 1.2em;
    text-decoration: none;
    color: #2d3436;
    background-color: #dfe6e9;
    padding: 10px 20px 10px 20px;
    border-radius: 25px;
    text-align: center;
    position: absolute;
    bottom: -45px;
    left: 30%;
    transition: .5s;
  }
  .lienprojet:hover {
    transform: scale(1);
  }
  .titre {
    font-size: 1.8em;
    margin: 40px;
    text-align: center;
    color: #2d3436;
  }
}

</style>

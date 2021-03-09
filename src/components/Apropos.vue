<template>
  <div>
    <div class="livre">
      <div class="card">

        <div class="imgBox2 details" @click="Ouvrir3">
          <h2>Mes centres d'intérêts</h2>
          <p>Mes centres d'intérêts sont nombreux, mais tout aussi intéressant. Pour commencer:
            Internet. J'ai faits mes premières recherches Google quand j'étais au collège.
            Découvrant cet univers, j'essayais de le prendre en main. A partir de là, nombreux sont
            les heures où je suis resté afin de comprendre l'utilisation.</p>
          <p>Bien entendu, j'ai découvert également les jeux vidéos. Ce sont pour moi un grand
            passe temps. Même si je n'ai pas un bon niveau, je m'intéresse tout particulièrement à l'E-sport.
            Un domaine en pleine expansion depuis quelques années mais qui reste très intéressants.
            <br>
            Passionné également des mangas, je ne peux m'empêcher de regarder leurs adaptations animés.
            Cela me permet aussi de m'inspirer pour trouver une orignialité pour un menu ou une identité visuelle
            pour un site web.</p>
          <p>J'aime beaucoup la musique. Cela me permet de me concentrer pendant le travail masi aussi pour le montage.
            Même si ce n'est pas mon objectif principal, j'aime aussi faire des petits montages vidéos. Que ce soit sur un jeu vidéo ou
            sur la conception d'un film, j'aime beaucoup analyser les sons.</p>
          <p>Enfin, pour revenir en arrière, j'aime beaucoup les bandes-dessinées. Cela me permet de faire une pause au niveau
            des écrans mais aussi pour découvrir une histoire écrite et non tapé sur un clavier.</p>
        </div>

        <div class="imgBox3 details" @click="Ouvrir2">
          <h2>Qui suis-je ?</h2>
          <img src="../assets/img/visage.jpg" alt="armando">
          <p>Je m'appelle Armando Manzoli, j'ai 20 ans et je suis originaire de Belfort.
            Actuellement en seconde année du DUT Métiers du Multimédia et de l'Internet (MMI),
            mon objectif professionnel est de devenir Développeur Front-End.
            Passionné par le web en général, j'ai immédiatement trouvé ma voie lorsque j'ai découvert
            le développement web.
            <br>
            <br>
            J'ai d'abord effectué une première année en Réseaux et Télécommunication où j'ai
            appris les bases du réseaux mais aussi la création de sites web ce qui m'a fait
            changé d'horizon.</p>
          <p>En autodidacte, j'ai crée divers pages web afin de bien comprendre la conception en passant par
            l'apprentissage des différents langages jusqu'à l'intégration.
            Mes deux années au DUT MMI m'ont conforté dans mon choix. Grâce à cette formation, j'ai pu découvrir
            plus profondément le développement web. J'ai acquis les notions de communication web, de référencement mais
            aussi de graphisme.</p>
          <p>j'apprécie grandement la conception d'un site internet de la maquette graphique jusqu'à l'intégration finale.</p>
        </div>

        <div class="imgBox4 details" @click="Ouvrir">
          <img class="all" alt="couverture" src="../assets/img/couverture.png" width="700" height="800">
        </div>
      </div>
    </div>


    <div class="livreresponsive">
      <div class="imgBoxresp">
      <h2>Qui suis-je ?</h2>
      <img src="../assets/img/visage.jpg" alt="armando">
      <p>Je m'appelle Armando Manzoli, j'ai 20 ans et je suis originaire de Belfort.
        Actuellement en seconde année du DUT Métiers du Multimédia et de l'Internet (MMI),
        mon objectif professionnel est de devenir Développeur Front-End.
        Passionné par le web en général, j'ai immédiatement trouvé ma voie lorsque j'ai découvert
        le développement web.
        <br>
        <br>
        J'ai d'abord effectué une première année en Réseaux et Télécommunication où j'ai
        appris les bases du réseaux mais aussi la création de sites web ce qui m'a fait
        changé d'horizon.</p>
      <p>En autodidacte, j'ai crée divers pages web afin de bien comprendre la conception en passant par
        l'apprentissage des différents langages jusqu'à l'intégration.
        Mes deux années au DUT MMI m'ont conforté dans mon choix. Grâce à cette formation, j'ai pu découvrir
        plus profondément le développement web. J'ai acquis les notions de communication web, de référencement mais
        aussi de graphisme.</p>
      <p>j'apprécie grandement la conception d'un site internet de la maquette graphique jusqu'à l'intégration finale.</p>
    </div>

    <div class="imgBoxresp marge">
      <h2>Mes centres d'intérêts</h2>
      <p>Mes centres d'intérêts sont nombreux, mais tout aussi intéressant. Pour commencer:
        Internet. J'ai faits mes premières recherches Google quand j'étais au collège.
        Découvrant cet univers, j'essayais de le prendre en main. A partir de là, nombreux sont
        les heures où je suis resté afin de comprendre l'utilisation.</p>
      <p>Bien entendu, j'ai découvert également les jeux vidéos. Ce sont pour moi un grand
        passe temps. Même si je n'ai pas un bon niveau, je m'intéresse tout particulièrement à l'E-sport.
        Un domaine en pleine expansion depuis quelques années mais qui reste très intéressants.
        <br>
        Passionné également des mangas, je ne peux m'empêcher de regarder leurs adaptations animés.
        Cela me permet aussi de m'inspirer pour trouver une orignialité pour un menu ou une identité visuelle
        pour un site web.</p>
      <p>J'aime beaucoup la musique. Cela me permet de me concentrer pendant le travail masi aussi pour le montage.
        Même si ce n'est pas mon objectif principal, j'aime aussi faire des petits montages vidéos. Que ce soit sur un jeu vidéo ou
        sur la conception d'un film, j'aime beaucoup analyser les sons.</p>
      <p>Enfin, pour revenir en arrière, j'aime beaucoup les bandes-dessinées. Cela me permet de faire une pause au niveau
        des écrans mais aussi pour découvrir une histoire écrite et non tapé sur un clavier.</p>
    </div>

    </div>

    <div class="temps">

      <section class="timeline">
        <div class="container">
          <div class="timeline-item">
            <div class="timeline-img"></div>

            <div class="timeline-content js--fadeInLeft">
              <h2>Lycée Germaine Tillon</h2>
              <div class="date">2016 - 2018</div>
              <p>2 ans d'études (Première et Terminale) dans la filière STI2D (Sciences Technologiques et du Développement Durable) avec obtention du Baccalauréat en juillet 2018.</p>
            </div>
          </div>

          <div class="timeline-item">

            <div class="timeline-img"></div>

            <div class="timeline-content timeline-card js--fadeInRight">
              <div class="timeline-img-header">
                <h2>DUT Réseaux et Télécommunication</h2>
              </div>
              <div class="date">2018 - 2019</div>
              <p>Un an d'étude en réseaux et télécommunications</p>
            </div>

          </div>

          <div class="timeline-item">

            <div class="timeline-img"></div>

            <div class="timeline-content js--fadeInLeft">
              <div class="date">2019 - 2021</div>
              <h2>DUT Métiers du Multimédia <br>et de L'Internet</h2>
              <p>Deux ans d'études au DUT MMI de Montbéliard.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name:'Apropos',
  methods : {
    Ouvrir:  function () {

      var ouvre = document.querySelectorAll('.imgBox4');

      function gestClick() {
        this.classList.toggle("actif4");
      }

        for (var i = 0; i < ouvre.length; i++) {
        var ouverture = ouvre[i];
        ouverture.addEventListener("click",gestClick);
      }

    },
    Ouvrir2:  function () {

      var ouvre = document.querySelectorAll('.imgBox3');

      function gestClick() {
        this.classList.toggle("actif3");
      }

      for (var i = 0; i < ouvre.length; i++) {
        var ouverture = ouvre[i];
        ouverture.addEventListener("click",gestClick);
      }

    },
    Ouvrir3:  function () {

      var ouvre = document.querySelectorAll('.imgBox2');

      function gestClick() {
        this.classList.toggle("actif2");
      }

      for (var i = 0; i < ouvre.length; i++) {
        var ouverture = ouvre[i];
        ouverture.addEventListener("click",gestClick);
      }

    }
  }
}
</script>

<style>
.mesinfos > .details > h2 {
  font-size: 3em;
  color: #2d3436;
  text-align: center;
}
.mesinfos {
  overflow-x: hidden;
}

/* Livre */
.livre {
  width: 100%;
  height: 100vh;
  margin-bottom: 100px;
}
.card{
  position: absolute;
  width: 700px;
  height: 800px;
  background: #FFF;
  top: 50%;
  left: 69%;
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) perspective(2000px);
  transition: 1s;
  cursor: pointer;
}
.card::before{
  content: "";
  position: absolute;
  top: -5px;
  left: 0px;
  width: 100%;
  height: 5px;
  background: #927B7B;
  transform-origin: bottom;
  transform: skewX(-45deg);
}
.card::after{
  content: "";
  position: absolute;
  top: 0px;
  right: -5px;
  width: 5px;
  height: 100%;
  background: #927B7B;
  transform-origin: left;
  transform: skewY(-45deg);
}
.card .imgBox2 {
  width: 100%;
  height: 100%;
  position: relative;
  transform-origin: left;
  z-index: 1;
  transition: 3s;
  background-color: #efeeee;
  margin-top: 20px;
}
.card .imgBox3 {
  width: 100%;
  height: 100%;
  position: relative;
  transform-origin: left;
  z-index: 1;
  transition: 3s;
  background-color: #efeeee;
  margin-top: 20px;
}
.card .imgBox4 {
  width: 100%;
  height: 100%;
  position: relative;
  transform-origin: left;
  z-index: 1;
  transition: 3s;
}
.actif {
  transform: rotateY(-160deg);
}
.actif1 {
  transform: rotateY(-165deg);
}
.actif2 {
  transform: rotateY(-170deg);
}
.actif3 {
  transform: rotateY(-175deg);
}
.actif4 {
  transform: rotateY(-180deg);
}
.card .details{
  position: absolute;
  top: -20px;
  box-sizing: border-box;
  padding: 20px 0 0 0;
  z-index: -1;
}
.imgBox3 > img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  float: left;
  margin: 20px 10px 0 20px;
}
.imgBox3 > p {
  font-size: 1.1em;
  font-family: "TitilliumWeb", sans-serif;
  margin-top: 50px;
  line-height: 1.3em;
  padding: 0 25px 0 25px;
}
.imgBox2 > img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  float: left;
  margin: 20px 10px 0 20px;
}
.imgBox2 > p {
  font-size: 1.1em;
  font-family: "TitilliumWeb", sans-serif;
  margin-top: 50px;
  line-height: 1.3em;
  padding: 0 25px 0 25px;
}
.livreresponsive {
  display: none;
}

/*timeline*/
.temps {
  width: 80%;
  height: 100vh;
  margin: auto;
}
.timeline {
  position: relative;
}
.timeline::before {
  content: '';
  background: #2d3436;
  width: 5px;
  height: 95%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.timeline-item {
  width: 100%;
  margin-bottom: 70px;
}
.timeline-item:nth-child(even) .timeline-content {
  float: right;
  padding: 40px 30px 10px 30px;
}
.timeline-item:nth-child(even) .timeline-content .date {
  right: auto;
  left: 0;
  font-family: "TitilliumWeb", sans-serif;
}
.timeline-item:nth-child(even) .timeline-content::after {
  content: '';
  position: absolute;
  border-style: solid;
  width: 0;
  height: 0;
  top: 30px;
  left: -15px;
  border-width: 10px 15px 10px 0;
  border-color: transparent #2d3436 transparent transparent;
}
.timeline-item::after {
  content: '';
  display: block;
  clear: both;
}

.timeline-content {
  position: relative;
  width: 43%;
  padding: 12px 30px;
  border-radius: 20px;
  background: #2d3436;
  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);
}
.timeline-content > h2 {
  font-size: 1.3em;
  color: #dfe6e9;
  font-family: "AkayaKanadaka", sans-serif;
}
.timeline-img-header > h2 {
  font-size: 1.3em;
  font-family: "AkayaKanadaka", sans-serif;
}
.timeline-content::after {
  content: '';
  position: absolute;
  border-style: solid;
  width: 0;
  height: 0;
  top: 30px;
  right: -15px;
  border-width: 10px 0 10px 15px;
  border-color: transparent transparent transparent #2d3436;
}

.timeline-img {
  width: 30px;
  height: 30px;
  background: #dfe6e9;
  border: 2px solid #2d3436;
  border-radius: 50%;
  position: absolute;
  left: 49.9%;
  margin-top: 25px;
  margin-left: -15px;
}
.timeline-card {
  padding: 0 !important;
}
.timeline-card p {
  padding: 0 20px;
  color: #dfe6e9;
  margin: 10px;
  font-family: "TitilliumWeb", sans-serif;
}
div.temps > section > div > div:nth-child(1) > div.timeline-content.js--fadeInLeft > p {
  color: #dfe6e9;
  margin-top: 20px;
  font-family: "TitilliumWeb", sans-serif;
}
div.temps > section > div > div:nth-child(3) > div.timeline-content.js--fadeInLeft > p {
  color: #dfe6e9;
  margin-top: 20px;
  font-family: "TitilliumWeb", sans-serif;
}


.timeline-img-header {
  height: 200px;
  position: relative;
  margin-bottom: 20px;
}
.timeline-img-header h2 {
  color: #dfe6e9;
  position: absolute;
  bottom: 5px;
  left: 20px;
}

blockquote {
  margin-top: 30px;
  color: #757575;
  border-left-color: #3F51B5;
  padding: 0 20px;
}

.date {
  background: #FF4081;
  display: inline-block;
  color: #FAEBD7;
  padding: 10px;
  position: absolute;
  border-radius: 10px;
  top: 0;
  right: 0;
}

@media screen and (max-width: 830px) {
  .timeline::before {
    left: 50px;
  }
  .timeline .timeline-img {
    left: 50px;
  }
  .timeline .timeline-content {
    max-width: 100%;
    width: auto;
    margin-left: 70px;
  }
  .timeline .timeline-item:nth-child(even) .timeline-content {
    float: none;
  }
  .timeline .timeline-item:nth-child(odd) .timeline-content::after {
    content: '';
    position: absolute;
    border-style: solid;
    width: 0;
    height: 0;
    top: 30px;
    left: -15px;
    border-width: 10px 15px 10px 0;
    border-color: transparent #faf3e7 transparent transparent;
  }
  .livreresponsive {
    display: block;
    width: 90%;
    height: 100vh;
  }
  .livreresponsive > h2 {
    font-family: "AkayaKanadaka", sans-serif;
    font-size: 1.1em;
  }
  .livre {
    display: none;
  }
  .imgBoxresp > img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    float: left;
    margin: 20px 32px 35px 20px;
  }
  .imgBoxresp > p {
    font-size: 18px;
    font-family: "TitilliumWeb", sans-serif;
    margin-top: 50px;
    line-height: 1.3em;
    padding: 0 25px 0 25px;
  }
  .imgBoxresp > h2 {
    font-family: "AkayaKanadaka", sans-serif;
    font-size: 32px;
    color: #2d3436;
    text-align: center;
    padding: 50px;
  }
  .temps {
    margin: 700px 0 0 0;
  }
}

@media screen and (max-width: 400px) {
  .timeline::before {
    left: 50px;
  }
  .timeline .timeline-img {
    left: 50px;
  }
  .timeline .timeline-content {
    max-width: 100%;
    width: auto;
    margin-left: 70px;
  }
  .timeline .timeline-item:nth-child(even) .timeline-content {
    float: none;
  }
  .timeline .timeline-item:nth-child(odd) .timeline-content::after {
    content: '';
    position: absolute;
    border-style: solid;
    width: 0;
    height: 0;
    top: 30px;
    left: -15px;
    border-width: 10px 15px 10px 0;
    border-color: transparent #faf3e7 transparent transparent;
  }
  .timeline-card p {
    font-size: 14px;
  }
  .timeline-card h2 {
    font-size: 1.1em;
  }
  .timeline-content h2 {
    font-size: 1.1em;
    margin-top: 25px;
  }
  .livreresponsive {
    display: block;
    width: 90%;
    height: 100vh;
  }
  .livreresponsive > h2 {
    font-family: "AkayaKanadaka", sans-serif;
    font-size: 1.1em;
  }
  .livre {
    display: none;
  }
  .imgBoxresp > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 50% 25px 25%;
  }
  .imgBoxresp > p {
    font-size: 16px;
    font-family: "TitilliumWeb", sans-serif;
    margin-top: 50px;
    line-height: 1.3em;
    padding: 0 25px 0 25px;
  }
  .imgBoxresp > h2 {
    font-family: "AkayaKanadaka", sans-serif;
    font-size: 32px;
    color: #2d3436;
    text-align: center;
    padding: 50px;
  }
  .temps {
    margin: 1600px auto;
  }
}

</style>

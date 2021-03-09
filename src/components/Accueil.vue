<template>
  <div>
    <div class="introduction">
      <div class="texteintro">
        <h1 class="line anim-typewriter">Armando Manzoli</h1>
        <br>
        <p class="devintro">Développeur Front-End</p>
        <br>

        <img class="chevron" src="../assets/img/chevron.svg" alt="chevron" width="100px" height="200px">
      </div>
    </div>


    <p class="introsection">A Propos</p>
    <div class="border"></div>
    <div class="introapropos">
      <div class="avatar">
        <img src="../assets/img/armando.svg" alt="armando" width="500px" height="500px">
         </div>
      <div class="apropos">
        <p class="jaime">J'aime    <span></span></p>
        <p class="decouvre">J'ai découvert le monde du web en 2015. C'est à ce moment là que j'ai choisi
          cette voie afin de devenir développeur web. Création, conception et animation de sites web
          me passionnent. je suis actuellement en seconde année de DUT Métiers du Multimédia (MMI)
          et de l'Internet à Montbéliard...</p>

        <router-link to="/Apropos" class="ensavoir">
          En savoir plus
        </router-link>
      </div>
    </div>

    <div class="services-section">
      <div class="inner-width">
        <p class="introsection">Mes services</p>
        <div class="border"></div>
        <div class="services-container">

          <div class="service-box">
            <div class="service-icon">
              <i class="fas fa-code"></i>
            </div>
            <div class="service-title">Développement Web</div>
            <div class="service-desc">
              Création de sites web pour tout entreprises ayant besoin d'une communication digitale.</div>
          </div>

          <div class="service-box">
            <div class="service-icon">
              <i class="fas fa-paint-brush"></i>
            </div>
            <div class="service-title">Web Designs</div>
            <div class="service-desc">
              Rendre les sites web attrayant et interactif pour différentes cibles.
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
              <i class="fas fa-brush"></i>
            </div>
            <div class="service-title">Responsive Designs</div>
            <div class="service-desc">
              Production de sites web sur-mesure pour tout média (de l'ordinateur jusqu'au mobile).
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
              <i class="fas fa-cube"></i>
            </div>
            <div class="service-title">Modélisations 3D web</div>
            <div class="service-desc">
              e                    Modélisation et conception d'objets 3D pouvant être utilisé sur le web.
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
              <i class="fas fa-database"></i>
            </div>
            <div class="service-title">Bases de Données</div>
            <div class="service-desc">
              Création, gestion et mise à jour de bases de données de toutes types.
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
              <i class="fab fa-android"></i>
            </div>
            <div class="service-title">Android</div>
            <div class="service-desc">
              Création d'applications Mobiles exclusivement pour Android.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Accueil',
}
</script>

<style>
/*page accueil*/
/* #2d3436 */
.line {
  position: relative;
  width: 16em;
  margin: 0 auto;
  border-right: 2px solid #2d3436;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;transform: translateY(-50%);
}
.anim-typewriter {
  animation: typewriter 2.5s steps(40) 1s 1 normal both,
  blinkTextCursor 500ms steps(40) infinite normal;
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 9em;
  }
}

@keyframes blinkTextCursor {
  from {
    border-right-color: #2d3436;
  }
  to {
    border-right-color: transparent;
  }
}
.devintro {
  opacity: 0;
  animation: opacite 1s linear;
  animation-delay: 4s;
  animation-fill-mode: forwards;
}
@keyframes opacite {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.chevron {
  transform: translateY(200px);
  animation: flotte 2s linear infinite;
}
@keyframes flotte {
  0% {
    transform: translateY(200px);
  }
  50% {
    transform: translateY(215px);
  }
  100% {
    transform: translateY(200px);
  }
}
.introduction {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.introduction > img {
  width: 400px;
  height: 500px;
  margin-left: 10px;
}
.introapropos{
  width: 100%;
  height: 100vh;
}

.texteintro {
  width: 900px;
  text-align: center;
  color: #2d3436;
}
.texteintro > h1 {
  font-size: 6em;
}
/*css a propos */
.introapropos {
  display: flex;
  align-items: center;
  justify-content: center;
}

.apropos {
  width: 100%;
  height: 500px;
}
/* CSS Section Mes services */
.inner-width{
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  overflow: hidden;
}
.border{
  width: 160px;
  height: 2px;
  background: #2d3436;
  margin: 25px auto;
}
.services-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.service-box{
  max-width: 25%;
  padding: 10px;
  text-align: center;
  color: #2d3436;
  margin-top: 20px;
}

.service-icon{
  display: inline-block;
  width: 70px;
  height: 70px;
  border: 3px solid #2d3436;
  color: #2d3436;
  transform: rotate(45deg);
  margin-bottom: 30px;
  margin-top: 16px;
  transition: 0.3s linear;
}
.service-icon i{
  line-height: 70px;
  transform: rotate(-45deg);
  font-size: 26px;
}
.service-box:hover .service-icon{
  background: #2d3436;
  color: #dfe6e9;
  border-radius: 50%;
}
.service-title{
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.service-desc{
  font-size: 14px;
}
.services-section > .ensavoir {
  text-align: center;
}

@media screen and (max-width:960px) {
  .service-box{
    max-width: 45%;
  }
}

@media screen and (max-width:768px) {
  .service-box{
    max-width: 50%;
  }
}

@media screen and (max-width:480px) {
  .service-box{
    max-width: 100%;
  }
}

.texteintro,.apropos {
  font-family: "TitilliumWeb",sans-serif;
}
.apropos {
  font-size: 1.2em;
  font-family: "TitilliumWeb", sans-serif;
}
.apropos p {
  padding-right: 100px;
}
.texteintro > p {
  font-size: 1.5em;
}
.introsection {
  font-family: "AkayaKanadaka", sans-serif;
  text-align: center;
  font-size: 3.2em;
  color: #2d3436;
}
.services-section > .introsection {
  font-family: "AkayaKanadaka", sans-serif;
}
.services-section {
  font-family: "TitilliumWeb", sans-serif;
}
.jaime > span::before {
  content: '';
  animation: text infinite 10s;
  font-family: "AkayaKanadaka", sans-serif;
}
@keyframes text {
  0%{
    content: 'internet';
  }
  20%{
    content: 'Créer';
  }
  40%{
    content: 'modéliser';
  }
  60%{
    content: 'animer';
  }
  80%{
    content: 'développer';
  }
  100%{
    content: 'produire';
  }
}
.jaime {
  font-size: 4em;
  margin-bottom: 20px;
  font-family: "TitilliumWeb", sans-serif;
  color: #2d3436;
}
.apropos > p {
  line-height: 1.5em;
  margin-bottom: 50px;
}
.ensavoir {
  font-size: 1.4em;
  width: 200px;
  padding: 18px;
  background-color: #2d3436;
  color: #dfe6e9;
  border: none;
  margin-top: 100px;
  border-radius: 20px;
  transition: 0.5s;
  cursor: pointer;
  text-decoration: none;
}
.ensavoir:hover {
  transform: scale(1.05);
}



@media screen and (max-width:830px) {
  .texteintro > h1 {
    font-size: 4em;
  }

  .avatar > img {
    width: 200px;
    height: 200px;
    margin-bottom: 100px;
  }

  .jaime {
    font-size: 2.2em;
  }

  .decouvre {
    font-size: 18px;
    padding-right: 50px;
  }

  .introsection {
    font-size: 2.5em;
  }

  .ensavoir {
    font-size: 1.1em;
    padding: 12px;
    margin-left: 22%;
  }

  .service-box {
    max-width: 40%;
  }

  .service-icon {
    width: 45px;
    height: 45px;
  }
  .service-icon i {
    line-height: 46px;
    font-size: 22px;
  }
  .inner-width {
    padding: 0;
  }
}
@media screen and (max-width:400px) {
  .texteintro > h1 {
    font-size: 2em;
  }

  .avatar > img {
    width: 200px;
    height: 200px;
    margin-bottom: 100px;
  }

  .jaime {
    font-size: 1.5em;
  }

  .decouvre {
    font-size: 14px;
    padding-left: 35px;
  }

  .introsection {
    font-size: 1.8em;
  }

  .ensavoir {
    font-size: 1.1em;
    padding: 12px;
    margin-left: 0;
  }

  .service-box {
    max-width: 40%;
  }

  .service-icon {
    width: 45px;
    height: 45px;
  }
  .service-icon i {
    line-height: 46px;
    font-size: 22px;
  }
  .inner-width {
    padding: 0;
  }
  .introapropos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .avatar > img {
    margin-bottom: 50px;
  }
  .apropos {
    text-align: center;
  }
}
</style>

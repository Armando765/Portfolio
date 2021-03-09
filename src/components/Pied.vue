<template>
  <div>
    <footer>
      <div class="footer-section">
        <div class="monlogo">
        </div>
        <div>
          <h2>Me Contacter</h2>
          <ul>
            <li><img src="../assets/img/logos/envelope.svg" alt="enveloppe" class="imgcontact"><a href="mailto:armando.manzoli1@gmail.com">armando.manzoli@gmail.com</a></li>
            <li><img src="../assets/img/logos/mobile.svg" alt="mobile" class="imgcontact"> <a href="">06 83 35 54 38</a></li>
          </ul>
        </div>
        <div>
          <h2>Me Suivre</h2>
          <div class="reseaux">
            <a href="https://www.facebook.com/armando.manzoli.7/ "><img src="../assets/img/logos/facebook.svg" alt="facebook"></a>
            <a href="https://www.linkedin.com/in/armando-manzoli-848a87196/"><img src="../assets/img/logos/linkedin.svg" alt="linkedin"></a>
            <a href="https://www.instagram.com/armandomanzoli/?hl=fr"><img src="../assets/img/logos/instagram.svg" alt="instagram"></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Pied',
}

</script>

<style>
/* FOOTER */
footer {
  width: 100%;
  height: 300px;
  background-color: #2d3436;
  margin-top: 100px;
}
.footer-section {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.footer-section > div {
  width: 33.33%;
  height: 200px;
}

.reseaux {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.reseaux > a > img {
  width: 70px;
  height: 70px;
}
.footer-section > div {

}
.footer-section > div > h2 {
  font-family: "AkayaKanadaka", sans-serif;
  font-size: 1.5em;
  color: #dfe6e9;
  margin-bottom: 25px;
  text-align: center;
}
.footer-section > div > ul > li {
  list-style: none;
  margin: 0 10px 0 10px;
}
.footer-section > div > ul > li > a {
  text-decoration: none;
  color: #dfe6e9;
  font-family: "TitilliumWeb", sans-serif;
  font-size: 1.2em;
}
.footer-section > div > ul > li > p {
  text-decoration: none;
  color: #dfe6e9;
  font-family: "TitilliumWeb", sans-serif;
  font-size: 1.2em;
}
.footer-section > div > ul > li >  img {
  width: 45px;
  height: 45px;
  transform: translateY(15px);
  margin-right: 15px;
}

@media screen and (max-width: 830px) {
  footer {
    height: 400px;
    margin-top: 400px;
  }
  .footer-section {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .footer-section > div {
    width: 80%;
    height: 200px;
  }
  .reseaux > a > img {
    width: 40px;
    height: 40px;
  }
  .footer-section > div > h2 {
    font-family: "AkayaKanadaka", sans-serif;
    font-size: 1.2em;
    color: #dfe6e9;
    margin: 50px 0 25px 0;
    text-align: center;
  }
  .footer-section > div > ul > li {
    list-style: none;
    margin: 0 10px 0 10px;
    text-align: center;
  }
  .footer-section > div > ul > li > a {
    text-decoration: none;
    color: #dfe6e9;
    font-family: "TitilliumWeb", sans-serif;
    font-size: 18px;
  }
  .footer-section > div > ul > li > p {
    text-decoration: none;
    color: #dfe6e9;
    font-family: "TitilliumWeb", sans-serif;
    font-size: 18px;
  }
  .footer-section > div > ul > li >  img {
    width: 45px;
    height: 45px;
    transform: translateY(15px);
    margin-right: 15px;
  }
  .imgcontact {
    padding-right: 50px;
  }
  .monlogo {
    display: none;
  }
}

@media screen and (max-width:400px) {
  footer {
    height: 400px;
    margin-top: 50px;
  }
  .footer-section {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .footer-section > div {
    width: 100%;
    height: 200px;
  }
  .reseaux > a > img {
    width: 40px;
    height: 40px;
  }
  .footer-section > div > h2 {
    font-family: "AkayaKanadaka", sans-serif;
    font-size: 1.2em;
    color: #dfe6e9;
    margin: 50px 0 25px 0;
  }
  .footer-section > div > ul > li {
    list-style: none;
    margin: 0 10px 0 10px;
  }
  .footer-section > div > ul > li > a {
    text-decoration: none;
    color: #dfe6e9;
    font-family: "TitilliumWeb", sans-serif;
    font-size: 16px;
  }
  .footer-section > div > ul > li > p {
    text-decoration: none;
    color: #dfe6e9;
    font-family: "TitilliumWeb", sans-serif;
    font-size: 18px;
  }
  .footer-section > div > ul > li >  img {
    width: 45px;
    height: 45px;
    transform: translateY(15px);
    margin-right: 15px;
  }
  .imgcontact {
    padding-right: 50px;
  }
  .monlogo {
    display: none;
  }
}
</style>

<template>
  <div class="details">
    <h2 class="bodydetail">Chambre 3D sur une page web</h2>
    <div class="description">
      <p>
        Modélisation d'une chambre en 3D lors de ma seconde année au DUT MMI.
        Pour ce faire, j'ai utilisé <a href="https://www.autodesk.fr/products/3ds-max/overview?term=1-YEAR&support=null">3Dsmax</a> comme logiciel.
        Par la suite, j'affiche cette chambre sur une page web où je peux interagir avec les différents éléments de la pièce.
      </p>
    </div>

    <h3>Conception des objets</h3>
    <div class="conception">
      <img src="../assets/img/montageecran.png" alt="montage moniteur" class="ecran">
      <p class="conceptionecran">
        Après avoir réfléchi aux différents objets qui seront dans la pièce comme un moniteur ou un bureau, j'ai pu commencer par leur conception.
        La particularité est que chaque objet est différent mais la création reste assez proche.
        Par exemple, j'ai modéliser un moniteur en deux temps. La première, assez simple, était de créer l'écran lui-même ce qui est très simple.
        Ensuite je me suis concentré sur la base de l'écran lui permettant de se maintenir. J'ai découvert de nombreux outils afin d'arriver à un résultat
        assez réaliste.
      </p>
    </div>

    <div class="conception">
      <img src="../assets/img/montagebureau.png" alt="montage moniteur" class="bureau">
      <p class="conceptionbureau">
        Lorsque les objets sont modélisés, nous pouvons ajouter une touche de réalisme en leur donnant un matériaux prédéfini ainsi qu'une texture.
        <br>
        Par exemple, l'unité centrale ayant 2 faces importantes, j'ai ajouté une texture (qui est en réalité une image) arrière représentant l'arrière (avec les défférentes prises)
        et une autre pour le devant. Pour certaines réalisations comme des maisons complètes, c'est un aspect important afin de pouvoir s'y merger plus facilement.
        Enfin, quand toutes les pièces sont terminés, il ne reste plus q'à les intégrer ensembles donnant un bureau comprenant plusieurs objets du quotidien.
      </p>
    </div>


    <h3 class="utile">Utiliser la 3D sur le web</h3>
    <div class="description">
      <p>
        Maintenant que tout est terminé, nous pouvons nous lancer sur son utilisation dnas une page web. Pour cela, il nous faudra la librairie
        <a href="https://threejs.org/">Three.js</a> permettant de créer et d'utiliser des formes 3D dans le navigateur. Pour  le bon fonctionnement cette bibliothèque, il nous faut un serveur
        web. (l'extension <a href="https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb">webServer For Chrome</a> est suffisante)
      </p>
    </div>


    <div class="conceptionthreejs">
      <video src="../assets/videos/testthreejs.mp4" controls></video>
      <p class="conceptionthree">
        Sachant que lorsque l'on modélise une scène sur 3Dsmax, il a fallu que l'on convertisse ce fichier en Collada (dae) qui peut être lu par cette librairie.
       L'utilisation de la 3D est très intéressante dans certains cas. Si l'on veut montrer à notre cible un objet ou faire une visite d'un lieu la 3D est pratique.
      Nous pouvons interagir avec des objets si on l'autorise (comme jouer un son lors d'un clic ou ouvrir une porte) ou encore observer la scènes sou différents angles. Cela rend le site web original avec peu de limite.
      Nous pouvons créer des jeux, d'autant plus que Three.js est très complet que ce soit pour la conception ou pour l'utilisation de la 3D.</p>
    </div>


  </div>
</template>
<script>
export default {
  name : 'Details'
}
</script>
<style>
.details {
  background-color: #dfe6e9;
}
.bodydetail {
  font-family: "AkayaKanadaka", sans-serif;
  font-size: 4em;
  color: #2d3436;
  margin: 0 0 0 25px;
  padding-top: 100px;
}
.description {
  font-family: "TitilliumWeb", sans-serif;
  color: #2d3436;
  font-size: 1.3em;
  width: 50%;
  margin: 25px;
}
.description > p > a {
  text-decoration: none;
}
h3 {
  font-size: 3em;
  color: #2d3436;
  margin: 250px 0 50px 25px;
  font-family: "AkayaKanadaka", sans-serif;
}
.conceptionecran {
  font-family: "TitilliumWeb", sans-serif;
  font-size: 1.3em;
  line-height: 1.3em;
  padding-right:  60%;
  margin-top: 70px;
}
.conceptionbureau {
  font-family: "TitilliumWeb", sans-serif;
  font-size: 1.3em;
  line-height: 1.3em;
  margin-top: 70px;
  padding-left: 50%;
}
.conceptionthree {
  font-family: "TitilliumWeb", sans-serif;
  font-size: 1.3em;
  line-height: 1.3em;
  margin-top: 70px;
  padding-right: 50%;
  color: #2d3436;
}
.conceptionthreejs {
  width: 90%;
  height: 500px;

  margin: auto;
  padding: 10px;
}
.conception {
  width: 80%;
  height: 500px;

  margin: auto;
  padding: 10px;
}
.ecran {
  float: right;
  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);
}
.bureau {
  width: 600px;
  height: 500px;
  float: left;
}
video {
  width: 800px;
  height: 400px;
  float: right;
  border: 1px solid #2d3436;
}


@media screen and (max-width:830px) {
  .bodydetail {
    font-size: 2.5em;
  }
  .description {
    text-align: center;
    width: 85%;
    margin-top: 50px;
  }
  h3 {
    font-size: 2.5em;
    margin: 150px 0 50px 0;
    text-align: center;
  }
  .conception {
    width: 100%;
    padding: 0;
    margin-top: 250px;
  }
  .ecran {
    float: none;
    width: 600px;
    height: 400px;
    margin: 25px 0 25px 10%;
  }
  .conceptionecran,.conceptionbureau,.conceptionthree {
    font-size: 1.1em;
    padding: 25px;
    margin-bottom: 100px;
  }
  .bureau {
    float: none;
    width: 600px;
    height: 400px;
    margin: 25px 0 25px 10%;
  }
  .utile {
    margin-top: 250px;
  }
  video {
    width: 700px;
    height: 400px;
    float: none;
    border: 1px solid #2d3436;
  }
}
@media screen and (max-width:400px) {
  .bodydetail {
    font-size: 1.8em;
  }
  .description {
    text-align: center;
    width: 85%;
    margin-top: 50px;
  }
  h3 {
    font-size: 1.6em;
    margin: 150px 0 50px 0;
    text-align: center;
  }
  .conception {
    width: 100%;
    padding: 0;
    margin-top: 250px;
  }
  .ecran {
    float: none;
    width: 300px;
    height: 200px;
    margin: 25px 0 25px 10%;
  }
  .conceptionecran,.conceptionbureau,.conceptionthree {
    font-size: 1em;
    padding: 25px;
    margin-bottom: 100px;
  }
  .bureau {
    float: none;
    width: 300px;
    height: 200px;
    margin: 25px 0 25px 10%;
  }
  .utile {
    margin-top: 250px;
  }
  video {
    width: 300px;
    height: 200px;
    float: none;
    border: 1px solid #2d3436;
  }
}
</style>

import Vue from 'vue'
import Router from 'vue-router'
import Navigation from '../components/Navigation'
import Pied from '../components/Pied'
import Accueil from '../components/Accueil'
import Apropos from '../components/Apropos'
import Projets from "../components/Projets"
import Details from "../components/Details"

Vue.use(Router)

export default new Router({
  routes: [

    {path: '/navigation', name: 'Navigation', component: Navigation},
    {path: '/Pied', name: 'Pied', component: Pied},

    {path: '/', name: 'Accueil', component: Accueil},
    {path: '/Apropos', name: 'Apropos', component: Apropos},
    {path: '/Projets', name: 'Projets', component: Projets},
    {path: '/Details', name: 'Details', component: Details},
  ]
})

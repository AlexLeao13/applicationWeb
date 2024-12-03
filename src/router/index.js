import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/signin",
      name: "Signin",
      // Route pour la page de connexion
      component: () => import("../views/Signin.vue"),
    },
    {
      path: "/create-account",
      name: "CreateAccount",
      // Route pour la page de création de compte
      component: () => import("../views/CreateAccount.vue"),
    },
    {
      path: "/accueil",
      name: "Accueil",
      // Route pour la page d'accueil principale
      component: () => import("../views/Accueil.vue"),
    },
    {
      path: "/accueil-fraternel",
      name: "AccueilFraternel",
      // Route pour la page "Accueil Fraternel"
      component: () => import("../views/AccueilFraternel.vue"),
    },
    {
      path: "/conference-mois",
      name: "ConferenceMois",
      // Route pour la page des conférences du mois
      component: () => import("../views/ConferenceMois.vue"),
    },
    {
      path: "/changer-mdp",
      name: "ChangerMdp",
      // Route pour la page de changement de mot de passe
      component: () => import("../views/changerMdp.vue"),
    },
    {
      path: "/formulaire-demande-priere",
      name: "FormulaireDemandePriere",
      // Route pour le formulaire de demande de prière
      component: () => import("../views/FormulaireDemandePriere.vue"),
    },
    {
      path: "/formulaire-demande-priere-suite",
      name: "FormulaireDemandePriereSuite",
      // Route pour la suite du formulaire de demande de prière
      component: () => import("../views/FormulaireDemandePriereSuite.vue"),
    },
    {
      path: "/motDePassOublier",
      name: "motDePassOublier",
      // Route pour la page de récupération de mot de passe
      component: () => import("../views/motDePassOublier.vue"),
    },
    {
      path: "/PageZoom",
      name: "PageZoom",
      // Route pour une page dédiée à Zoom (exemple)
      component: () => import("../views/PageZoom.vue"),
    },
    // Nouvelle route ajoutée pour un exemple
    {
      path: "/FormulaireSansobs",
      name: "FormulaireSansobs",
      // Exemple de nouvelle page à ajouter
      component: () => import("../views/FormulaireSansobs.vue"),
    },
    // Route de gestion 404 pour les chemins non reconnus
    {
      path: "/:pathMatch(.*)*",
      name: "Accueil",
      // Page par défaut pour les chemins invalides
      component: () => import("../views/Accueil.vue"),
    },
  ],
});

export default router;

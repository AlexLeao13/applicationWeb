import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //{
    //  path: "/",
    //  redirect: "/home"
    //},
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue")
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
      component: () => import("../views/ConferenceMois.vue")
    },
    {
      path: "/groupes-etudes",
      name: "GroupesEtudes",
      component: () => import("../views/GroupesEtudes.vue")
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
      path: "/dons",
      name: "Dons",
      component: () => import("../views/Dons.vue")
    },
    {
      path: "/formulaire/:jour",
      name: "FormulaireSansobs",
      component: () => import("../views/FormulaireSansobs.vue"),
      props: true
    },
    {
      path: "/conference-mercredi",
      name: "ConferenceMercredi",
      component: () => import("../views/FormulaireSansobs.vue"),
      props: {
        jour: "Mercredi",
        langue: "Portugais",
        mode: "En ligne et présentiel",
        typeActivite: "Conférence",
        showAddress: true
      }
    },
    {
      path: "/conference-samedi",
      name: "ConferenceSamedi",
      component: () => import("../views/FormulaireSansobs.vue"),
      props: {
        jour: "Samedi",
        langue: "Français",
        mode: "En ligne",
        typeActivite: "Conférence",
        showAddress: false
      }
    },
    {
      path: "/group-mercredi",
      name: "GroupMercredi",
      component: () => import("../views/FormulaireSansobs.vue"),
      props: {
        jour: "Mercredi",
        langue: "Portugais",
        mode: "En ligne et présentiel",
        typeActivite: "Groupe d'étude",
        showAddress: true
      }
    },
    {
      path: "/group-jeudi",
      name: "GroupJeudi",
      component: () => import("../views/FormulaireSansobs.vue"),
      props: {
        jour: "Jeudi",
        langue: "Portugais",
        mode: "En ligne",
        typeActivite: "Groupe d'étude",
        showAddress: false
      }
    },
    {
      path: "/group-samedi",
      name: "GroupSamedi",
      component: () => import("../views/FormulaireSansobs.vue"),
      props: {
        jour: "Samedi",
        langue: "Français",
        mode: "En ligne",
        typeActivite: "Groupe d'étude",
        showAddress: false
      }
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

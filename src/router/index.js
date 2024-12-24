import { createRouter, createWebHistory } from "vue-router";
import i18n from "../i18n"; // Importez i18n pour gérer les langues

const supportedLanguages = ["fr", "pt"]; // Langues supportées

const validateLang = (to, from, next) => {
  const lang = to.params.lang;
  if (supportedLanguages.includes(lang)) {
    i18n.global.locale = lang; // Change la langue dans i18n
    next();
  } else {
    next("/fr"); // Redirige vers la langue par défaut si invalide
  }
};

const routes = [
  {
    path: "/:lang/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    beforeEnter: validateLang
  },
  {
    path: "/:lang/signin",
    name: "Signin",
    component: () => import("../views/Signin.vue"),
    beforeEnter: validateLang
  },
  {
    path: "/:lang/create-account",
    name: "CreateAccount",
    component: () => import("../views/CreateAccount.vue"),
    beforeEnter: validateLang
  },
  {
    path: "/:lang/accueil",
    name: "Accueil",
    component: () => import("../views/Accueil.vue"),
    beforeEnter: validateLang
  },
  {
    path: "/:lang/accueil-fraternel",
    name: "AccueilFraternel",
    component: () => import("../views/AccueilFraternel.vue"),
    beforeEnter: validateLang
  },
  {
    path: "/:lang/conference-mois",
    name: "ConferenceMois",
    component: () => import("../views/ConferenceMois.vue"),
    beforeEnter: validateLang
  },
  {
    path: "/:lang/groupes-etudes",
    name: "GroupesEtudes",
    component: () => import("../views/GroupesEtudes.vue"),
    beforeEnter: validateLang
  },
  {
    path: "/:lang/changer-mdp",
    name: "ChangerMdp",
    component: () => import("../views/changerMdp.vue"),
    beforeEnter: validateLang
  },
  {
    path: "/:lang/form-demande-priere",
    name: "FormDemandePriere",
    component: () => import("../views/FormDemandePriere.vue"),
    beforeEnter: validateLang
  },
  {
    path: "/:lang/form-demande-priere-suite",
    name: "FormDemandePriereSuite",
    component: () => import("../views/FormDemandePriereSuite.vue"),
    beforeEnter: validateLang
  },
  {
    path: "/:lang/motDePassOublier",
    name: "motDePassOublier",
    component: () => import("../views/motDePassOublier.vue"),
    beforeEnter: validateLang
  },
  {
    path: "/:lang/page-zoom",
    name: "PageZoom",
    component: () => import("../views/PageZoom.vue"),
    beforeEnter: validateLang
  },
  {
    path: "/:lang/dons",
    name: "Dons",
    component: () => import("../views/Dons.vue"),
    beforeEnter: validateLang
  },
  {
    path: "/:lang/formulaire/:jour",
    name: "FormulaireSansobs",
    component: () => import("../views/FormulaireSansobs.vue"),
    props: true,
    beforeEnter: validateLang
  },
  {
    path: "/:lang/conference-mercredi",
    name: "ConferenceMercredi",
    component: () => import("../views/FormulaireSansobs.vue"),
    props: {
      jour: "Mercredi",
      langue: "Portugais",
      mode: "En ligne et présentiel",
      typeActivite: "Conférence",
      showAddress: true
    },
    beforeEnter: validateLang
  },
  {
    path: "/:lang/conference-samedi",
    name: "ConferenceSamedi",
    component: () => import("../views/FormulaireSansobs.vue"),
    props: {
      jour: "Samedi",
      langue: "Français",
      mode: "En ligne",
      typeActivite: "Conférence",
      showAddress: false
    },
    beforeEnter: validateLang
  },
  {
    path: "/:lang/group-mercredi",
    name: "GroupMercredi",
    component: () => import("../views/FormulaireSansobs.vue"),
    props: {
      jour: "Mercredi",
      langue: "Portugais",
      mode: "En ligne et présentiel",
      typeActivite: "Groupe d'étude",
      showAddress: true
    },
    beforeEnter: validateLang
  },
  {
    path: "/:lang/group-jeudi",
    name: "GroupJeudi",
    component: () => import("../views/FormulaireSansobs.vue"),
    props: {
      jour: "Jeudi",
      langue: "Portugais",
      mode: "En ligne",
      typeActivite: "Groupe d'étude",
      showAddress: false
    },
    beforeEnter: validateLang
  },
  {
    path: "/:lang/group-samedi",
    name: "GroupSamedi",
    component: () => import("../views/FormulaireSansobs.vue"),
    props: {
      jour: "Samedi",
      langue: "Français",
      mode: "En ligne",
      typeActivite: "Groupe d'étude",
      showAddress: false
    },
    beforeEnter: validateLang
  },
  // Route par défaut pour les chemins non valides
  {
    path: "/:pathMatch(.*)*",
    redirect: "/fr" // Redirige vers la langue et la route par défaut
  },

  // Routes pour le formulaire d'assistance spirituelle
  {
    path: "/:lang/assistance-spirituelle",
    name: "FormAssistanceSpirituelle",
    component: () => import("../views/FormAssistanceSpirituelle.vue"),
    beforeEnter: validateLang
  },
  
  // Routes pour le formulaire d'accueil fraternel
  {
    path: "/:lang/form-accueil-fraternel",
    name: "FormAccueilFraternel",
    component: () => import("../views/FormAccueilFraternel.vue"),
    beforeEnter: validateLang
  },
  {
    path: "/:lang/form-groupe-priere",
    name: "FormGroupePriere",
    component: () => import("../views/FormGroupePriere.vue"),
    beforeEnter: validateLang
  },
  {
    path: "/:lang/form-demande-priere",
    name: "FormDemandePriere",
    component: () => import("../views/FormDemandePriere.vue"),
    beforeEnter: validateLang
  },
  {
    path: "/:lang/form-demande-priere-suite",
    name: "FormDemandePriereSuite",
    component: () => import("../views/FormDemandePriereSuite.vue"),
    props: (route) => ({
      isAlive: route.query.isAlive === 'true', // Convert query string to Boolean
      demandeur: JSON.parse(route.query.demandeur)
    }),
    beforeEnter: validateLang
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

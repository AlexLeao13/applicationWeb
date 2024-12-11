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
      component: () => import("../views/Signin.vue")
    },
    {
      path: "/create-account",
      name: "CreateAccount",
      component: () => import("../views/CreateAccount.vue")
    },
    {
      path: "/accueil",
      name: "Accueil",
      component: () => import("../views/Accueil.vue")
    },
    {
      path: "/accueil-fraternel",
      name: "AccueilFraternel",
      component: () => import("../views/AccueilFraternel.vue")
    },
    {
      path: "/conferece-mois",
      name: "ConferenceMois",
      component: () => import("../views/ConferenceMois.vue")
    },
    {
      path: "/changer-mdp",
      name: "changerMdp",
      component: () => import("../views/changerMdp.vue")
    },
    {
      path: "/groupes-etudes",
      name: "GroupesEtudes",
      component: () => import("../views/GroupesEtudes.vue")
    },
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
    }
  ]
});

export default router;

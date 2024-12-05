<template>
  <div class="accueil-fraternel-page">
    <!-- Image d'arrière-plan et logo -->
    <div class="header">
      <img
        class="background-image"
        src="@/assets/images/imageArriere.png"
        alt="Arrière-plan"
      />
      <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
    </div>

    <!-- Menu horizontal -->
    <menuComponent />

    <!-- Contenu principal -->
    <div class="content">
      <h1 class="title">ACCUEIL FRATERNEL</h1>
      <p class="subtitle">Choisir une option :</p>

      <!-- Liste des boutons -->
      <div class="buttons-container">
        <button class="btn-option" @click="goToFormulaireSansobs('Assistance spirituelle en ligne')">
          Assistance spirituelle en ligne
        </button>
        <button class="btn-option" @click="goToFormulaireSansobs('Accueil fraternel en présentiel')">
          Accueil fraternel en présentiel
        </button>
        <!-- Ajoutez cette méthode pour le bouton "Groupe de prière" -->
        <button class="btn-option" @click="goToZoomPage">
          Groupe de prière (je veux participer)
        </button>
        <button class="btn-option" @click="goToDemandePriere">
          Demande de prière/vibration
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import menuComponent from "../components/menu.vue";

export default {
  components: {
    menuComponent
  },
  setup() {
    const router = useRouter();

    const goToFormulaireSansobs = (activityTitle) => {
      router.push({
        name: "FormulaireSansobs",
        params: { activity: JSON.stringify({ titre: activityTitle }) }
      });
    };

    const goToZoomPage = () => {
      // Redirection vers la page Zoom (vous pouvez passer des paramètres si nécessaire)
      router.push("/PageZoom");
    };

    const goToDemandePriere = () => {
      router.push({
        name: "FormulaireDemandePriereSuite",
        params: {
          activity: "Demande de prière/vibration", // Exemple d'activité
        },
      });
    };

    return {
      goToFormulaireSansobs,
      goToZoomPage,  // N'oubliez pas d'ajouter goToZoomPage ici
      goToDemandePriere
    };
  }
};
</script>

<style scoped>
/* Styles pour la page Accueil Fraternel */
.accueil-fraternel-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  position: relative;
  width: 100%;
  height: 200px;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo {
  position: absolute;
  top: 20%;
  left: 15%;
  transform: translate(-50%, -50%);
  height: 70px;
  width: 140px;
}

.content {
  max-width: 800px;
  text-align: center;
  margin-top: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #003366;
}

.subtitle {
  font-size: 18px;
  margin-bottom: 20px;
  color: #555;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
}

.btn-option {
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}

.btn-option:hover {
  background-color: #218838;
}
</style>

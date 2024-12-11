<template>
  <div class="accueil-page">
    <!-- Image d'arrière-plan et logo -->
    <div class="header">
      <img
        class="background-image"
        src="@/assets/images/imageArriere.png"
        alt="Arrière-plan"
      />
      <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
    </div>

    <menuComponent />

    <!-- Contenu principal -->
    <div class="content">
      <h1 class="title">Bienvenue dans le système d'assistance CESF</h1>

      <p class="description">
        Le système d'assistance CESF a été créé pour faciliter l'accès à nos
        membres et au public externe pour les conférences et accompagnements
        fraternels. Vous pouvez vous inscrire à nos événements directement
        depuis chez vous. Nous espérons que vous profiterez pleinement de notre
        système.
      </p>

      <!-- Image décorative -->
      <img
        src="@/assets/images/Accueil Fraternel.jpg"
        alt="Accueil Fraternel"
        class="decorative-image"
      />

      <!-- Nouveau bouton -->
      <div class="library-button-container">
        <button class="library-button" @click="goToLibrary">
          ACCÉDER À LA BIBLIOTHÈQUE
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

    // Redirection vers la bibliothèque
    const goToLibrary = () => {
      window.open(
        "https://docs.google.com/spreadsheets/d/1SPBcpodJeG_eu2z1BGxCp_OuRb5ZbQNt3QNy4GKynew/edit?gid=249589814#gid=249589814",
        "_blank"
      ); // Remplace par l'URL réelle
    };

    return {
      goToLibrary
    };
  }
};
</script>

<style scoped>
/* Styles pour la page Accueil */
.accueil-page {
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
  left: 10%;
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
}

.description {
  font-size: 16px;
  text-align: justify;
  line-height: 1.5;
  margin-bottom: 20px;
}

.decorative-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-top: 20px;
}

.library-button-container {
  margin-top: 20px;
}

.library-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.library-button:hover {
  background-color: #0056b3;
}
</style>

<template>
  <div class="accueil-fraternel-page">
    <!-- Bannière ou logo -->
    <div class="header">
      <img
        class="background-image"
        src="@/assets/images/imageArriere.png"
        alt="Bannière"
      />
      <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
    </div>

    <menuComponent />

    <!-- Titre principal -->
    <h1 class="title">ACCUEIL FRATERNEL</h1>

    <!-- Menu ou options des activités -->
    <div class="activities-container">
      <h2 class="subtitle">Prendre un rendez-vous :</h2>

      <!-- Liste dynamique des activités -->
      <div v-if="activities.length > 0">
        <button
          v-for="(activity, index) in activities"
          :key="index"
          class="activity-button"
          @click="goToFormulaire(activity)"
        >
          {{ activity.titre }}
        </button>
      </div>
      <div v-else class="no-activities">
        Aucune activité disponible pour le moment.
      </div>
    </div>

    <!-- Section pour les actions générales -->
    <div class="actions-container">
      <h2 class="subtitle">Actions :</h2>
      <button class="action-button" @click="goToPageZoom">
        Rejoindre un groupe Zoom
      </button>
      <button class="action-button" @click="goToFormulaireDemandePriere">
        Faire une demande de prière
      </button>
    </div>

    <!-- Bouton retour -->
    <button class="return-button" @click="onBack">Retour</button>
  </div>
</template>

<script>
import axios from "axios";
import menuComponent from "../components/menu.vue";
export default {
  components: {
    menuComponent,
  },
  data() {
    return {
      token: localStorage.getItem("userToken"),
      activities: [],
      apiUri: "http://localhost:3000", // URL de base pour l'API
    };
  },
  async mounted() {
    try {
      const config = {
        method: "get",
        url: `${this.apiUri}/activitiyFromType?activity_type=accueil%20fraternel`,
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      const response = await axios.request(config);
      this.activities = response.data;
      console.log("Activités récupérées :", this.activities);
    } catch (error) {
      console.error("Erreur lors de la récupération des activités :", error);
    }
  },
  methods: {
    goToFormulaire(activity) {
      this.$router.push({ name: "FormulaireSansobs", params: { activity } });
    },
    goToPageZoom() {
      this.$router.push({ name: "PageZoom" });
    },
    goToFormulaireDemandePriere() {
      this.$router.push({ name: "FormulaireDemandePriere" });
    },
    onBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
/* Styles de la page */
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

/* Menu horizontal */
.menu {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.activities-container,
.actions-container {
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
  text-align: center;
}

.activity-button,
.action-button {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.activity-button:hover,
.action-button:hover {
  background-color: #0056b3;
}

.no-activities {
  color: gray;
  font-size: 16px;
  margin: 20px 0;
}

.return-button {
  padding: 10px 20px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.return-button:hover {
  background-color: #5a6268;
}
</style>

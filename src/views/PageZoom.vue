<template>
  <div class="page">
    <!-- Barre d'action -->
    <header class="action-bar">
      <h1 class="action-bar-title">Détails de l'activité</h1>
    </header>

    <main>
      <!-- Image et logo -->
      <div class="image-container">
        <img src="@/assets/images/imageArriere.png" alt="Arrière-plan" class="image-background" />
        <img src="@/assets/images/logo.png" alt="Logo" class="image-logo" />
      </div>

      <!-- Informations principales -->
      <section class="info-container">
        <h2 class="activity-title">{{ activity.titre }}</h2>
        <p class="activity-description">{{ activity.description }}</p>
        <p class="instructions">Pour participer, cliquez sur le bouton ci-dessous :</p>

        <!-- Liste des horaires -->
        <div
          v-for="(horaires, index) in schedules"
          :key="index"
          class="schedule-container"
        >
          <p class="schedule-text">Jour : {{ horaires.jour }}</p>
          <p class="schedule-text">Début : {{ horaires.time_from }}</p>
          <p class="schedule-text">Fin : {{ horaires.time_to }}</p>
          <p class="schedule-text">Lieu : {{ horaires.lieu }}</p>
          <button class="blue-button" @click="openZoom">Participer</button>
        </div>

        <p v-if="schedules.length === 0" class="no-schedules">
          Aucun horaire disponible pour cette activité.
        </p>
      </section>

      <!-- Bouton retour -->
      <button class="return-button" @click="onBack">Retour</button>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PageZoom",
  props: {
    apiUri: {
      type: String,
      default: "http://localhost:3000", // Valeur par défaut
    },
    activity: {
      type: Object,
      default: () => ({
        id: 1,
        titre: "Activité par défaut",
        description: "Description de l'activité par défaut.",
        lien_zoom: "https://zoom.us",
      }),
    },
  },
  data() {
    return {
      token: localStorage.getItem("userToken") || "",
      schedules: [], // Liste des horaires
    };
  },
  mounted() {
    if (this.activity.id) {
      this.getSchedules(this.activity.id);
    } else {
      console.warn("ID de l'activité manquant !");
    }
  },
  methods: {
    getSchedules(activity_id) {
      axios
        .get(`${this.apiUri}/activity-schedules?activity_id=${activity_id}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          this.schedules = response.data;
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des horaires :", error);
          alert("Erreur : Impossible de récupérer les horaires.");
        });
    },
    openZoom() {
      const groupLink = this.activity.lien_zoom || "https://zoom.us";
      window.open(groupLink, "_blank"); // Ouvre le lien Zoom dans un nouvel onglet
    },
    onBack() {
      this.$router.back(); // Retour à la page précédente
    },
  },
};
</script>

<style scoped>
/* Barre d'action */
.action-bar {
  background-color: #007bff;
  color: white;
  padding: 10px;
  text-align: center;
}

.action-bar-title {
  margin: 0;
}

/* Conteneur des images */
.image-container {
  position: relative;
  text-align: center;
}

.image-background {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.image-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
}

/* Conteneur des informations */
.info-container {
  padding: 20px;
  text-align: center;
}

.activity-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.activity-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.instructions {
  font-size: 14px;
  margin-bottom: 20px;
}

/* Conteneur des horaires */
.schedule-container {
  margin: 15px 0;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.schedule-text {
  font-size: 14px;
  margin-bottom: 5px;
}

.no-schedules {
  font-size: 14px;
  color: #999;
}

/* Boutons */
.blue-button {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.blue-button:hover {
  background-color: #0056b3;
}

.return-button {
  background-color: #6c757d;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
}

.return-button:hover {
  background-color: #5a6268;
}
</style>

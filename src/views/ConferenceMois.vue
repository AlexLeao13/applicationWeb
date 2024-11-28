<template>
  <div class="conference-mois">
    <!-- Titre de la page -->
    <h1 class="title">CONFÉRENCE DU MOIS</h1>

    <!-- Description -->
    <p class="description">
      Bienvenue sur la page des conférences du mois. Veuillez choisir une
      conférence pour vous inscrire :
    </p>

    <!-- Liste des conférences -->
    <div class="buttons-container">
      <button class="button" @click="inscrireMercredi">
        Conférence du Mercredi
      </button>
      <button class="button" @click="inscrireSamedi">
        Conférence du Samedi
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConferenceMois",
  methods: {
    inscrireMercredi() {
      console.log("Inscription à la conférence du Mercredi.");
      alert("Vous avez choisi la conférence du Mercredi.");
    },
    inscrireSamedi() {
      console.log("Inscription à la conférence du Samedi.");
      alert("Vous avez choisi la conférence du Samedi.");
    },
  },
};
</script>

<style scoped>
/* Styles pour la page Conférence */
.conference-mois {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  min-height: 100vh;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.description {
  font-size: 16px;
  margin-bottom: 30px;
  text-align: center;
  line-height: 1.5;
  color: #555;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}

.button:hover {
  background-color: #0056b3;
}
</style>

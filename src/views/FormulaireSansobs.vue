<template>
  <div class="formulaire-priere-page">
    <!-- Header avec image et logo -->
    <div class="header">
      <img class="background-image" src="@/assets/images/imageArriere.png" alt="Bannière" />
      <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
    </div>

    <div class="form-container">
      <!-- Titre du formulaire -->
      <h2 class="title">Formulaire</h2>

      <!-- Affichage de l'activité choisie -->
      <p class="label">Activité choisie : {{ activity.titre || "Non spécifiée" }}</p>

      <!-- Champ de texte pour le nom et prénom -->
      <label class="label">Nom et prénom :</label>
      <input v-model="name" class="input" placeholder="Entrez votre nom et prénom" />

      <!-- Champ de texte pour le courriel -->
      <label class="label">Courriel :</label>
      <input v-model="courriel" class="input" type="email" placeholder="Entrez votre courriel" />

      <!-- Champ de texte pour le numéro de téléphone -->
      <label class="label">Numéro de téléphone :</label>
      <input v-model="phone" class="input" type="tel" placeholder="Entrez votre numéro de téléphone" />

      <!-- Champ pour l'observation ou la raison de la prière -->
      <label class="label">Décrivez votre problème :</label>
      <textarea v-model="reason" class="input" rows="4" placeholder="Entrez la raison de la prière"></textarea>

      <!-- Bouton Soumettre -->
      <button class="submit-button" @click="onSubmit">Soumettre</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormulaireSansobs",
  props: {
    activity: {
      type: Object,
      default: () => ({
        titre: "Activité non spécifiée"
      })
    }
  },
  data() {
    return {
      name: "",
      courriel: "",
      phone: "",
      reason: ""
    };
  },
  methods: {
    onSubmit() {
      if (!this.name || !this.courriel || !this.phone) {
        alert("Veuillez remplir tous les champs.");
        return;
      }
      alert("Formulaire soumis avec succès !");
    }
  },
  mounted() {
    const activityParam = this.$route.params.activity;
    if (activityParam) {
      this.activity = JSON.parse(activityParam);
    }
  }
};
</script>

<style scoped>
/* Styles pour FormulaireSansobs */
.header {
  position: relative;
  width: 100%;
}

.background-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.logo {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 80px;
  height: auto;
}

.form-container {
  margin: 20px;
}

.label {
  margin-top: 10px;
  display: block;
}

.input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

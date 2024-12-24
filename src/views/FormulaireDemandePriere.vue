<template>
  <div class="formulaire-priere-suite-page">
    <!-- Header avec image et logo -->
    <div class="header">
      <img class="background-image" src="@/assets/images/imageArriere.png" alt="Bannière" />
      <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
    </div>

    <h1 class="title">Demande de Prière</h1>

    <!-- Section des informations du bénéficiaire -->
    <div class="form-container">
      <h2 class="section-title">Informations du Bénéficiaire</h2>

      <!-- Champs communs -->
      <label class="label">Nom et prénom :</label>
      <input
        type="text"
        class="input"
        v-model="beneficiaire.nom"
        placeholder="Entrez le nom et prénom"
        required
      />

      <label class="label">Adresse :</label>
      <input
        type="text"
        class="input"
        v-model="beneficiaire.adresse"
        placeholder="Entrez l'adresse"
        required
      />

      <!-- Champ spécifique pour Personne vivante -->
      <div v-if="isAlive">
        <label class="label">Décrivez le motif :</label>
        <textarea
          class="textarea"
          v-model="beneficiaire.motif"
          placeholder="Décrivez brièvement le motif"
          required
        ></textarea>
      </div>

      <!-- Boutons -->
      <div class="button-container">
        <button class="submit-button" @click="submitForm">Soumettre</button>
        <button class="return-button" @click="onBack">Retour</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isAlive: {
      type: Boolean,
      required: true
    },
    demandeur: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      beneficiaire: {
        nom: "",
        adresse: "",
        motif: "" // Champ spécifique pour "Personne vivante"
      }
    };
  },
  methods: {
    submitForm() {
      // Logique pour soumettre la demande complète
      const completeData = {
        demandeur: this.demandeur,
        beneficiaire: this.beneficiaire,
        isAlive: this.isAlive
      };
      console.log("Formulaire soumis :", completeData);
      alert("Demande soumise avec succès !");
      this.$router.push("/accueil");
    },
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
/* Styles de la page */
.formulaire-priere-suite-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.section-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-container {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 16px;
  margin-bottom: 5px;
}

.input,
.textarea {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

.textarea {
  height: 80px;
  resize: none;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.submit-button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #218838;
}

.return-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.return-button:hover {
  background-color: #0056b3;
}
</style>

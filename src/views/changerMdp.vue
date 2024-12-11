<template>
  <div class="changer-mdp">
    <!-- Conteneur pour le titre et le formulaire -->
    <div class="header">
      <img
        class="image-background"
        src="@/assets/images/imageArriere.png"
        alt="Arrière-plan"
      />
      <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
    </div>

    <!-- Formulaire pour changer le mot de passe -->
    <div class="form-container">
      <h1 class="title">Changer votre mot de passe</h1>

      <!-- Ancien mot de passe -->
      <label for="ancienMotDePasse" class="label">Ancien mot de passe</label>
      <input
        type="password"
        id="ancienMotDePasse"
        class="input"
        v-model="ancienMotDePasse"
        placeholder="Entrer l'ancien mot de passe"
      />

      <!-- Nouveau mot de passe -->
      <label for="nouveauMotDePasse" class="label">Nouveau mot de passe</label>
      <input
        type="password"
        id="nouveauMotDePasse"
        class="input"
        v-model="nouveauMotDePasse"
        placeholder="Entrer le nouveau mot de passe"
      />

      <!-- Confirmation du mot de passe -->
      <label for="confirmerMotDePasse" class="label"
        >Confirmer le mot de passe</label
      >
      <input
        type="password"
        id="confirmerMotDePasse"
        class="input"
        v-model="confirmerMotDePasse"
        placeholder="Confirmer le nouveau mot de passe"
      />

      <!-- Boutons -->
      <button @click="changePassword" class="btn-ok">OK</button>
      <button @click="goBack" class="return-button">Retour</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ChangerMdp",
  data() {
    return {
      apiUri: "https://api.cesf.ca", // Change cette URL si nécessaire
      token: "", // Ton token JWT ou autre moyen d'authentification
      ancienMotDePasse: "",
      nouveauMotDePasse: "",
      confirmerMotDePasse: ""
    };
  },
  methods: {
    async changePassword() {
      if (this.nouveauMotDePasse !== this.confirmerMotDePasse) {
        alert("Les nouveaux mots de passe ne correspondent pas.");
        return;
      }

      try {
        const response = await axios.put(
          `${this.apiUri}/change-password`,
          {
            ancienMotDePasse: this.ancienMotDePasse,
            nouveauMotDePasse: this.nouveauMotDePasse
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
              "Content-Type": "application/json"
            }
          }
        );

        if (response.status === 200) {
          alert("Mot de passe changé avec succès !");
        } else {
          alert("Erreur lors du changement de mot de passe.");
        }
      } catch (error) {
        console.error("Erreur :", error);
        alert("Erreur lors de la connexion au serveur.");
      }
    },

    goBack() {
      this.$router.go(-1); // Retour à la page précédente
    }
  }
};
</script>

<style scoped>
.changer-mdp {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  min-height: 100vh;
}

.header {
  position: relative;
  width: 100%;
  height: 200px;
}

.image-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70px;
  width: 140px;
}

.form-container {
  max-width: 400px;
  width: 100%;
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: -50px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.label {
  font-size: 14px;
  margin-bottom: 5px;
  color: #555;
}

.input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn-ok {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
}

.btn-ok:hover {
  background-color: #0056b3;
}

.return-button {
  width: 100%;
  padding: 10px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.return-button:hover {
  background-color: #495057;
}
</style>

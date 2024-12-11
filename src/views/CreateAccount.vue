<template>
  <div class="create-account-page">
    <!-- Conteneur avec une image d'arrière-plan et un logo -->
    <div class="header">
      <img
        class="background-image"
        src="@/assets/images/imageArriere.png"
        alt="Background"
      />
      <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
    </div>

    <div class="form-container">
      <!-- Titre "Créer un compte" -->
      <h1 class="title">Créer un compte</h1>

      <!-- Champs de saisie -->
      <input type="text" placeholder="Prénom" class="input" v-model="prenom" />
      <input type="text" placeholder="Nom" class="input" v-model="nom" />
      <input
        type="email"
        placeholder="Courriel"
        class="input"
        v-model="courriel"
      />
      <input
        type="password"
        placeholder="Mot de passe"
        class="input"
        v-model="password"
      />
      <input
        type="password"
        placeholder="Confirmer mot de passe"
        class="input"
        v-model="confirmPassword"
      />

      <!-- Affichage d'erreur si nécessaire -->
      <p v-if="error" class="error-message">{{ error }}</p>

      <!-- Bouton d'inscription -->
      <button class="btn-ok" @click="signUp">S'inscrire</button>

      <!-- Bouton retour -->
      <button class="return-button" @click="goBack">Retour</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      prenom: "",
      nom: "",
      courriel: "",
      password: "",
      confirmPassword: "",
      error: null // Message d'erreur
    };
  },
  methods: {
    async signUp() {
      if (this.password !== this.confirmPassword) {
        this.error = "Les mots de passe ne correspondent pas.";
        return;
      }

      try {
        const response = await axios.post("https://api.cesf.ca/register", {
          prenom: this.prenom,
          nom: this.nom,
          courriel: this.courriel,
          password: this.password
        });

        if (response.status === 201) {
          this.$router.push({ name: "Signin" });
        } else {
          this.error = "Erreur lors de l'inscription. Veuillez réessayer.";
        }
      } catch (error) {
        console.error(error);
        this.error = "Une erreur s'est produite. Veuillez réessayer.";
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
/* Styles adaptés pour le formulaire */
.create-account-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

.form-container {
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-ok {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.return-button {
  width: 100%;
  padding: 10px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>

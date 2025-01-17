<template>
  <div class="signin-page">
    <!-- Image d'arrière-plan avec le logo centré -->
    <div class="header">
      <img
        class="background-image"
        src="@/assets/images/imageArriere.png"
        alt="Background"
      />
      <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
    </div>

    <div class="form-container">
      <!-- Texte "Bienvenue!" centré -->
      <h1 class="title">Bienvenue!</h1>

      <!-- Champ courriel -->
      <input
        type="email"
        id="courriel"
        placeholder="Entrez votre Courriel"
        class="input"
        v-model="courriel"
      />

      <!-- Champ Mot de passe -->
      <input
        type="password"
        id="password"
        placeholder="Entrez votre mot de passe"
        class="input"
        v-model="password"
      />

      <!-- Lien "Mot de passe oublié?" -->
      <a href="#" class="forgot-password" @click.prevent="goToMotDePassOublier">
        Mot de passe oublié?
      </a>

      <!-- Bouton pour tester les champs -->
      <button @click="testFields">Tester les Champs</button>
      
      <!-- Bouton Login -->
      <button class="btn-ok" @click="signin">Login</button>

      <!-- Bouton retour -->
      <button class="return-button" @click="goBack">Retour</button>

      <!-- Message d'erreur (affiché en cas d'erreur) -->
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from "@/services/api"; // Utilisation de l'instance Axios configurée

export default {
  name: "Signin",
  data() {
    return {
      courriel: "", // Champ pour le courriel de l'utilisateur
      password: "", // Champ pour le mot de passe
      error: null   // Message d'erreur pour afficher les problèmes
    };
  },
  methods: {
    // Méthode pour tester les champs de formulaire
    testFields() {
      console.log("Courriel :", this.courriel);ß
      console.log("Mot de passe :", this.password);
    },
    // Méthode pour revenir en arrière
    goBack() {
      this.$router.go(-1); // Retour à la page précédente
    },
    // Méthode pour rediriger vers la page "Mot de passe oublié"
    goToMotDePassOublier() {
      this.$router.push({ name: "MotDePassOublier" });
    },
    // Méthode pour gérer la connexion
    async signin() {
      try {
        console.log("Données envoyées via Axios :", {
            courriel: this.courriel,
            password: this.password
        });  

        const data = {
          courriel: this.courriel,
          password: this.password
        };

        const response = await axios.post("/login", data); // Requête POST au backend

        if (response.data && response.data.token) {
          // Stockage du token et redirection
          localStorage.setItem("userToken", response.data.token);
          this.$router.push({ name: "Accueil" }); // Redirection vers l'accueil
        } else {
          this.error = "Courriel ou mot de passe incorrect.";
        }
      } catch (error) {
        console.error("Erreur :", error);
        this.error = "Une erreur s'est produite. Veuillez réessayer.";
      }
    }
  }
};

</script>

<style scoped>
/* Styles adaptés pour le web */
.signin-page {
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
  left: 10%;
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

.forgot-password {
  display: block;
  margin-bottom: 15px;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>

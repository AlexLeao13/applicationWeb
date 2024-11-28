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
        placeholder="Courriel"
        class="input"
        v-model="courriel"
      />

      <!-- Champ Mot de passe -->
      <input
        type="password"
        placeholder="Mot de passe"
        class="input"
        v-model="password"
      />

      <!-- Lien "Mot de passe oublié?" -->
      <a href="#" class="forgot-password" @click.prevent="goToMotDePasseOublie">
        Mot de passe oublié?
      </a>

      <!-- Bouton Login -->
      <button class="btn-ok" @click="signin">Login</button>

      <!-- Bouton retour -->
      <button class="return-button" @click="goBack">Retour</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import AppPage from "@/components/AppPage.vue";
//import MotDePasseOublie from "@/components/MotDePasseOublie.vue";

export default {
  data() {
    return {
      courriel: "",
      password: "",
      error: null,
    };
  },
  methods: {
    goBack() {
      // Redirection ou logique de retour
      this.$router.go(-1);
    },
    goToMotDePasseOublie() {
      // Navigation vers la page "Mot de passe oublié"
      this.$router.push({ name: "MotDePasseOublie" });
    },
    async signin() {
      try {
        const response = await axios.post("http://localhost:3000/login", {
          courriel: this.courriel,
          password: this.password,
        });

        if (response.data && response.data.token) {
          console.log(response.data);

          // Stockage du token et redirection
          localStorage.setItem("userToken", response.data.token);
          this.$router.push({ name: "AppPage" });
        } else {
          alert("Erreur du courriel ou du mot de passe.");
        }
      } catch (error) {
        console.error(error);
        this.error = "Invalid login credentials";
        alert("Erreur du courriel ou du mot de passe.");
      }
    },
  },
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

.forgot-password {
  display: block;
  margin-bottom: 15px;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
}
</style>

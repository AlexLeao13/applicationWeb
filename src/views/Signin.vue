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
      <h1 class="title">Bienveonue!</h1>

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

      <!-- Message d'erreur (affiché en cas d'erreur) -->
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from "@/services/api"; // Utilisation de l'instance Axios configurée

export default {
  data() {
    return {
      courriel: "",
      password: "",
      error: null // Message d'erreur pour l'utilisateur
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
        let data = JSON.stringify({
          courriel: "bob@bob.com",
          password: "123"
        });

        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "http://localhost:3000/login",
          headers: {
            "Content-Type": "application/json"
          },
          data: data
        };

        const response = await axios
          .request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            return response;
          })
          .catch((error) => {
            console.log(error);
            return error;
          });

        // const response = await axios.post("/login", {
        //   courriel: this.courriel,
        //   password: this.password
        // });

        if (response.data && response.data.token) {
          // Stockage du token et redirection
          localStorage.setItem("userToken", response.data.token);
          this.$router.push({ name: "Accueil" }); // Redirection vers la page d'accueil
        } else {
          this.error = "Courriel ou mot de passe incorrect.";
        }
      } catch (error) {
        console.error(error);
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

<template>
  <div class="create-account">
    <div class="header">
      <img class="image-background" src="@/assets/images/imageArriere.png" alt="Arrière-plan" />
      <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
    </div>

    <div class="form-container">
      <h1 class="title">Créer un compte</h1>

      <label for="prenom" class="label">Prénom</label>
      <input type="text" id="prenom" class="input" v-model="prenom" placeholder="Entrez votre prénom" />

      <label for="nom" class="label">Nom</label>
      <input type="text" id="nom" class="input" v-model="nom" placeholder="Entrez votre nom" />

      <label for="courriel" class="label">Courriel</label>
      <input type="email" id="courriel" class="input" v-model="courriel" placeholder="Entrez votre courriel" />

      <label for="password" class="label">Mot de passe</label>
      <input type="password" id="password" class="input" v-model="password" placeholder="Entrez un mot de passe" />

      <label for="confirmPassword" class="label">Confirmer le mot de passe</label>
      <input type="password" id="confirmPassword" class="input" v-model="confirmPassword" placeholder="Confirmez votre mot de passe" />

      <button @click="signUp" class="btn-ok">S'inscrire</button>
      <button @click="goBack" class="return-button">Retour</button>

      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import api from "@/services/api.js"; // Importer l'instance Axios centralisée

export default {
  name: "CreateAccount",
  data() {
    return {
      prenom: "",
      nom: "",
      courriel: "",
      password: "",
      confirmPassword: "",
      error: ""
    };
  },
  methods: {
    async signUp() {
      if (this.password !== this.confirmPassword) {
        this.error = "Les mots de passe ne correspondent pas.";
        return;
      }

      try {
        const response = await api.post("/register", {
          prenom: this.prenom,
          nom: this.nom,
          courriel: this.courriel,
          password: this.password
        });

        if (response.status === 201) {
          alert("Compte créé avec succès !");
          this.$router.push("/signin"); // Redirige vers la page de connexion
        }
      } catch (error) {
        console.error("Erreur :", error);
        this.error = "Erreur lors de la création du compte.";
      }
    },

    goBack() {
      this.$router.go(-1); // Retour à la page précédente
    }
  }
};
</script>

<style scoped>
.create-account {
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

.error-message {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>

<template>
  <div class="forgot-password">
    <!-- Conteneur pour l'image d'arrière-plan et le logo -->
    <div class="image-container">
      <img class="background-image" src="@/assets/images/imageArriere.png" alt="Bannière" />
      <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
    </div>

    <!-- Conteneur du formulaire -->
    <div class="form-container">
      <h1>Mot de passe oublié</h1>

      <!-- Champ pour l'adresse e-mail -->
      <div class="form-group">
        <label for="courriel">Adresse e-mail :</label>
        <input
          id="courriel"
          type="email"
          placeholder="Entrez votre adresse e-mail"
          v-model="courriel"
        />
        <button @click="handlecourriel" class="btn">Envoyer le code</button>
      </div>

      <!-- Formulaire pour entrer le code et changer le mot de passe -->
      <div v-if="codeSent" class="form-group">
        <label for="code">Code reçu par e-mail :</label>
        <input
          id="code"
          type="text"
          placeholder="Entrez le code"
          v-model="code"
        />

        <label for="newPassword">Nouveau mot de passe :</label>
        <input
          id="newPassword"
          type="password"
          placeholder="Entrez le nouveau mot de passe"
          v-model="nouveauMotDepasse"
        />

        <label for="confirmPassword">Confirmez le mot de passe :</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirmez le mot de passe"
          v-model="confirmerNouveauMotDepasse"
        />

        <button @click="verifyCode" class="btn">Changer le mot de passe</button>
      </div>

      <!-- Bouton retour -->
      <button @click="goBack" class="btn return-button">Retour</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    apiUri: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      courriel: "",
      code: "",
      nouveauMotDepasse: "",
      confirmerNouveauMotDepasse: "",
      codeSent: false,
    };
  },
  methods: {
    handlecourriel() {
      axios
        .get(`${this.apiUri}/mot-de-passe-code`, { params: { courriel: this.courriel } })
        .then(() => {
          this.codeSent = true;
          alert("Un code de vérification a été envoyé à votre adresse e-mail.");
        })
        .catch(() => {
          alert("Adresse e-mail incorrecte !");
        });
    },
    verifyCode() {
      if (
        this.nouveauMotDepasse.length < 6 ||
        this.nouveauMotDepasse !== this.confirmerNouveauMotDepasse
      ) {
        alert("Les mots de passe ne correspondent pas ou sont trop courts.");
        return;
      }

      const data = {
        code: this.code,
        nouveauMotDePasse: this.nouveauMotDepasse,
        courriel: this.courriel,
      };

      axios
        .put(`${this.apiUri}/change-password-code`, data)
        .then(() => {
          alert("Mot de passe changé avec succès !");
          this.goBack();
        })
        .catch(() => {
          alert("Code incorrect, veuillez réessayer.");
        });
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
/* Styles de la page MotDePassOublier */
.image-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 20px;
}

.background-image {
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
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #333333;
  margin-bottom: 20px;
  font-size: 24px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #555555;
  font-size: 14px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 14px;
}

.btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}

.return-button {
  background-color: #6c757d;
}

.return-button:hover {
  background-color: #5a6268;
}
</style>

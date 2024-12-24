<template>
  <div class="form-page">
    <!-- Barre d'action et arrière-plan -->
    <div class="action-bar">
      <div class="image-container">
        <img
          src="@/assets/images/imageArriere.png"
          alt="Image d'arrière-plan"
          class="image-background"
        />
        <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
      </div>
    </div>
å
    <!-- Conteneur du formulaire -->
    <div class="form-container">
      <h1 class="title">Formulaire</h1>

      <!-- Contenu du formulaire -->
      <div class="form-group">
        <label class="label">Nom complet :</label>
        <input
          v-model="name"
          class="input"
          type="text"
          placeholder="Entrez votre nom complet"
          required
        />
      </div>
      <div class="form-group">
        <label class="label">Adresse e-mail :</label>
        <input
          v-model="email"
          class="input"
          type="email"
          placeholder="Entrez votre adresse e-mail"
          required
        />
      </div>
      <div class="form-group">
        <label class="label">Téléphone :</label>
        <input
          v-model="phone"
          class="input"
          type="tel"
          placeholder="Entrez votre numéro de téléphone"
          required
        />
      </div>
      <div class="form-group">
        <label class="label">Décrivez votre problème :</label>
        <textarea
          v-model="problem"
          class="textarea"
          placeholder="Décrivez brièvement votre problème"
          required
        ></textarea>
      </div>

      <!-- Boutons -->
      <div class="button-container">
        <button class="submit-button" @click="submitForm">Soumettre</button>
      </div>
      <div>
        <button class="return-button" @click="onBack">Retour</button>
      </div>
    </div> 
  </div> 
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      problem: "",
    };
  },
  methods: {
    submitForm() {
      // Logique pour soumettre le formulaire
      alert("Formulaire soumis avec succès !");
    },
    onBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
/* Styles généraux */
.form-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}

.action-bar {
  width: 100%;
  position: relative;
}

.image-container {
  position: relative;
  height: 200px;
  width: 100%;
}

.image-background {
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

/* Conteneur formulaire */
.form-container {
  width: 100%;
  max-width: 600px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #003366;
}

.form-group {
  margin-bottom: 15px;
}

.label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.input,
.textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.textarea {
  height: 80px;
  resize: none;
}

/* Boutons */
.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.submit-button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #218838;
}

/* Bouton retour */
.return-button {
  display: block;
  margin: 20px auto 0; /* Ajoute un espace au-dessus et centre horizontalement */
  padding: 10px 20px; /* Ajuste la taille pour correspondre à un bouton distinct */
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}


.return-button:hover {
  background-color: #0056b3;
}
</style>

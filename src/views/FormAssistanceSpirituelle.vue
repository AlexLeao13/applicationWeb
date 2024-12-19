<template>
  <div class="page">
    <!-- Barre d'action et arrière-plan -->
    <div class="action-bar">
      <div class="image-container">
        <img
          src="@/assets/images/imageArriere.png"
          alt="Image d'arrière-plan"
          class="image-background"
        />
        <img src="@/assets/images/logo.png" alt="Logo" class="image-avant" />
      </div>
    </div>

    <!-- Conteneur du formulaire -->
    <div class="form-container">
      <h1 class="title">Formulaire</h1>
      <form @submit.prevent="soumettreFormulaire">
        <div class="form-group">
          <label class="label">Nom complet :</label>
          <input
            v-model="name"
            type="text"
            class="input"
            placeholder="Entrez votre nom complet"
            required
          />
        </div>
        <div class="form-group">
          <label class="label">Adresse e-mail :</label>
          <input
            v-model="email"
            type="email"
            class="input"
            placeholder="Entrez votre adresse e-mail"
            required
          />
        </div>
        <div class="form-group">
          <label class="label">Téléphone :</label>
          <input
            v-model="phone"
            type="tel"
            class="input"
            placeholder="Entrez votre numéro de téléphone"
          />
        </div>
        <div class="form-group">
          <label class="label">Décrivez votre problème :</label>
          <textarea
            v-model="problem"
            class="textarea"
            placeholder="Décrivez votre problème ici..."
            required
          ></textarea>
        </div>
        <button type="submit" class="submit-button">Soumettre</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormAssistanceSpirituelle",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      problem: ""
    };
  },
  methods: {
    soumettreFormulaire() {
      console.log("Formulaire soumis :", {
        name: this.name,
        email: this.email,
        phone: this.phone,
        problem: this.problem
      });
      alert("Votre formulaire a été soumis avec succès !");
    }
  }
};
</script>

<style scoped>
/* Styles similaires aux autres formulaires */
.page {
  display: block;
  background-color: #f9f9f9;
  padding: 20px;
  font-family: Arial, sans-serif;
}
.action-bar .image-container {
  position: relative;
  height: 200px;
  width: 100%;
}
.image-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image-avant {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
  height: 70px;
}
.form-container {
  margin: 20px auto;
  max-width: 600px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  color: black;
}
.label {
  margin-bottom: 10px;
  font-weight: bold;
  color: #333;
}
.input,
.textarea {
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.textarea {
  height: 100px;
}
.submit-button {
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.submit-button:hover {
  background-color: #218838;
}
</style>

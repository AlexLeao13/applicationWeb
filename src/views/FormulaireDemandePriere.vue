<template>
  <div class="formulaire-page">
    <!-- Bannière ou logo -->
    <div class="header">
      <img class="background-image" src="@/assets/images/imageArriere.png" alt="Bannière" />
      <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
    </div>

    <!-- Titre principal -->
    <h1 class="title">Demande de Prière</h1>
    <h1 class="title">Bénéficiaire</h1>

    <!-- Formulaire -->
    <div class="form-container">
      <label for="name" class="form-label">Nom et prénom :</label>
      <input id="name" type="text" v-model="name" class="form-input" placeholder="Nom et prénom" />

      <label for="adresse" class="form-label">Adresse complète :</label>
      <input id="adresse" type="text" v-model="adresse" class="form-input" placeholder="Adresse complète" />

      <label for="reason" class="form-label">Décrivez votre problème :</label>
      <textarea id="reason" v-model="reason" class="form-textarea" placeholder="Raison de la prière"></textarea>

      <button class="form-button" @click="onSubmit">Envoyer</button>
      <button class="whatsapp-button" @click="openWhatsAppGroup">Rejoindre le groupe WhatsApp</button>
      <button class="return-button" @click="onBack">Retour</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$route.params.demandeur.name,  // Récupérer le nom et prénom
      adresse: "",
      reason: "",
    };
  },
  methods: {
    async onSubmit() {
      if (!this.name || !this.adresse || !this.reason) {
        alert("Tous les champs sont obligatoires.");
        return;
      }

      // Logique pour envoyer les données via une API
      alert("Demande envoyée !");
    },
    openWhatsAppGroup() {
      const groupLink = "https://chat.whatsapp.com/votre_code_d_invitation";
      window.open(groupLink, "_blank");
    },
    onBack() {
      this.$router.go(-1);  // Retour à la page précédente
    },
  },
};
</script>

<style scoped>
.formulaire-page {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70px;
  width: 140px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
}

.form-container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-label {
  font-weight: bold;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.form-textarea {
  resize: none;
  height: 100px;
}

.form-button,
.whatsapp-button,
.return-button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.whatsapp-button {
  background-color: #25d366;
}

.return-button {
  background-color: #6c757d;
}

.form-button:hover,
.whatsapp-button:hover,
.return-button:hover {
  opacity: 0.8;
}
</style>

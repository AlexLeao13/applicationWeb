<template>
  <div class="formulaire-priere-page">
    <!-- Header avec image et logo -->
    <div class="header">
      <img class="background-image" src="@/assets/images/imageArriere.png" alt="Bannière" />
      <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
    </div>

    <h1 class="title">Demande de Prière</h1>

    <!-- Choix entre personne vivante ou décédée -->
    <div class="choice-container">
      <label class="label">Votre demande de prière est pour :</label>
      <div class="buttons-container">
        <button :class="isAlive ? 'active' : ''" @click="setIsAlive(true)">
          Personne vivante
        </button>
        <button :class="!isAlive ? 'active' : ''" @click="setIsAlive(false)">
          Personne décédée
        </button>
      </div>
    </div>
    <h5 class="title2">Informations du demandeur</h5>
    <!-- Formulaire principal -->
    <form @submit.prevent="onNextTap" class="form-container">
      <label class="label">Nom et prénom :</label>
      <input type="text" class="input" v-model="name" placeholder="Entrez votre nom et prénom" required />

      <label class="label">Courriel :</label>
      <input type="email" class="input" v-model="courriel" placeholder="Entrez votre courriel" required />

      <label class="label">Numéro de téléphone :</label>
      <input type="tel" class="input" v-model="phone" placeholder="Entrez votre numéro de téléphone" required />

      
    </form>
    <button type="submit" class="suivant-button">Suivant</button>
    <button class="return-button" @click="onBack">Retour</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAlive: true, // Par défaut, demande pour une personne vivante
      name: "",
      courriel: "",
      phone: "",
    };
  },
  methods: {
    setIsAlive(isAlive) {
      this.isAlive = isAlive;
    },
    onNextTap() {
      // Rediriger vers FormulaireDemandePriereSuite avec les données
      this.$router.push({
        name: "FormulaireDemandePriereSuite", // Utilisation du nom correct de la route
        params: {
          isAlive: this.isAlive,
          demandeur: {
            name: this.name,
            courriel: this.courriel,
            phone: this.phone,
          },
        },
      });
    },
    onBack() {
      this.$router.go(-1); // Retour à la page précédente
    },
  },
};
</script>

<style scoped>
/* Styles de la page */
.formulaire-priere-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.title2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}


.choice-container {
  text-align: center;
  margin-bottom: 20px;
}

.buttons-container button {
  margin: 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.buttons-container button.active {
  background-color: #007bff;
  color: white;
}

.form-container {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 16px;
  margin-bottom: 5px;
}

.input {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

.suivant-button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.suivant-button:hover {
  background-color: #218838;
}

.return-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.return-button:hover {
  background-color: #0056b3;
}
</style>

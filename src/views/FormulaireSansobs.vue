<template>
  <div class="page">
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

    <div class="form-container">
      <h1 class="title">Formulaire</h1>

      <!-- Informations dynamiques -->
      <p class="label">Jour sélectionné : {{ jour }}</p>
      <p class="label">Langue : {{ langue }}</p>
      <p class="label">Mode de participation : {{ mode }}</p>
      <p class="label">Activité choisie : {{ typeActivite }} {{ jour }}</p>

      <!-- Phrase en bleu -->
      <p class="notice">
        Votre première fois? Remplacez le formulaire ci-dessous, s’il vous plaît
      </p>

      <!-- Formulaire -->
      <div class="form-group">
        <label class="label">Nom et prénom :</label>
        <input
          v-model="name"
          class="input"
          type="text"
          placeholder="Entrez votre nom et prénom"
        />
      </div>
      <div class="form-group">
        <label class="label">Courriel :</label>
        <input
          v-model="courriel"
          class="input"
          type="email"
          placeholder="Entrez votre courriel"
        />
      </div>
      <div class="form-group form-inline">
        <label class="label-inline">Numéro de téléphone :</label>
        <input
          v-model="phone"
          class="input-inline"
          type="tel"
          placeholder="Entrez votre numéro de téléphone"
        />
      </div>

      <!-- Bouton Zoom -->
      <div class="additional-info">
        <button class="zoom-button" @click="goToZoom">Zoom</button>

        <!-- Adresse CESF affichée uniquement si showAddress est vrai -->
        <div v-if="showAddress" class="address">
          <p>Adresse CESF :</p>
          <p>5569, Rue de Verdun</p>
          <p>Montréal, QC H4H 1L2</p>
        </div>
      </div>

      <!-- Bouton retour -->
      <button class="return-button" @click="onBack">Retour</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    jour: {
      type: String,
      default: "Jour inconnu"
    },
    langue: {
      type: String,
      default: "Langue inconnue"
    },
    mode: {
      type: String,
      default: "Mode inconnu"
    },
    typeActivite: {
      type: String,
      default: "Activité"
    },
    showAddress: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      name: "",
      courriel: "",
      phone: ""
    };
  },
  methods: {
    onBack() {
      this.$router.back();
    },
    goToZoom() {
      window.open(
        "https://us02web.zoom.us/j/7478764062?pwd=U0FXeThiZUt0WS90MC9MQWdWbThiZz09",
        "_blank"
      );
    }
  }
};
</script>

<style scoped>
/* Styles généraux */
.page {
  display: block;
  background-color: #f9f9f9;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* Conteneur principal */
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

.image-avant {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
  height: 70px;
}

/* Conteneur formulaire */
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

.input {
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Champ téléphone réduit */
.form-inline {
  display: flex;
  align-items: center;
  gap: 10px;
}

.label-inline {
  font-weight: bold;
  color: #333;
  white-space: nowrap;
}

.input-inline {
  width: 200px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Phrase en bleu */
.notice {
  margin: 20px 0;
  font-weight: bold;
  color: #007bff;
  font-size: 16px;
  text-align: center;
}

/* Bouton Zoom */
.zoom-button {
  display: block;
  width: 100%;
  max-width: 200px;
  margin: 15px 0;
  padding: 10px 15px;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
}

.zoom-button:hover {
  background-color: #218838;
}

/* Bouton retour */
.return-button {
  display: block;
  margin: 30px auto 0 auto;
  padding: 10px 20px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.return-button:hover {
  background-color: #0056b3;
}

/* Adresse CESF */
.address {
  margin-top: 15px;
  font-size: 14px;
  color: #333;
}
</style>

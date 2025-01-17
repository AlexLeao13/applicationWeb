<template>
  <div class="form-priere-suite-page">
    <p>Valeur de isAlive : {{ isAlive }}</p>

    <div class="header">
      <img class="background-image" src="@/assets/images/imageArriere.png" alt="Bannière" />
      <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
    </div>
  
    <h1 class="title">Demande de Prière</h1>
    <h2 class="subtitle">Informations du bénéficiaire</h2>

    <div v-if="isAlive" class="form-container">
      <label class="label">Nom et prénom :</label>
      <input v-model="nomBeneficiaire" class="input" type="text" required />

      <label class="label">Adresse :</label>
      <input v-model="adresseBeneficiaire" class="input" type="text" required />
  
      <label class="label">Décrivez le motif :</label>
      <textarea v-model="motifBeneficiaire" class="textarea" required></textarea>
    </div>

    <div v-else class="form-container">
      <label class="label">Nom et prénom :</label>
      <input v-model="nomBeneficiaire" class="input" type="text" required />
  
      <label class="label">Adresse :</label>
      <input v-model="adresseBeneficiaire" class="input" type="text" required />
    </div>
  
    <div class="button-container">
      <button class="submit-button" @click="submitForm">Soumettre</button>
    </div>
    <div class="button-container1">
      <button class="return-button" @click="onBack">Retour</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isAlive: {
      type: Boolean,
      required: true,
    },
    demandeur: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      nomBeneficiaire: "",
      adresseBeneficiaire: "",
      motifBeneficiaire: "",
    };
  },
  created() {
    console.log("Valeur reçue de isAlive :", this.isAlive);
    console.log("Valeur reçue de demandeur :", this.demandeur);
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    },
    submitForm() {
      const data = {
        nom: this.nomBeneficiaire,
        adresse: this.adresseBeneficiaire,
      };

      if (this.isAlive) {
        data.motif = this.motifBeneficiaire;
      }

      console.log("Formulaire soumis avec succès", data);
      alert("Formulaire soumis avec succès !");
    },
  },
};
</script>



  
  <style scoped>
  /* Styles de la page */
  .form-priere-suite-page {
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
  
  .subtitle {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .choice-container {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .buttons-container {
    display: flex;
    gap: 10px;
  }
  
  /* .buttons-container button {
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    background-color: white;
  } */
  
  /* .buttons-container button.active {
    background-color: #007bff;
    color: white;
  } */
  
  .form-container {
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
  }
  
  .label {
    display: block;
    margin-bottom: 5px;
    font-weight: normal;
    color: #ccc;
  }
  
  .input,
  .textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .textarea {
    height: 80px;
    resize: none;
  }
  
  .button-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
  }

  .button-container1 {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    padding-top: 40px;
   
  }
  
  .submit-button,
  .return-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    color: #fff;
  }
  
  .submit-button {
    background-color: #28a745;
  }
  
  .submit-button:hover {
    background-color: #218838;
  }
  
  .return-button {
    background-color: #007bff;
  }
  
  .return-button:hover {
    background-color: #0056b3;
  }
  </style>
  
<template>
    <div class="formulaire-priere-page">
      <!-- Header avec image et logo -->
      <div class="header">
        <img class="background-image" src="@/assets/images/imageArriere.png" alt="Bannière" />
        <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
      </div>
  
      <div class="form-container">
        <!-- Titre du formulaire -->
        <h2 class="title">Formulaire</h2>
  
        <!-- Affichage de l'activité choisie -->
        <p class="label">Activité choisie : {{ activity?.titre || "Non spécifiée" }}</p>
  
        <!-- Champ de texte pour le nom et prénom -->
        <label class="label">Nom et prénom :</label>
        <input v-model="name" class="input" placeholder="Entrez votre nom et prénom" :class="{ invalid: !name.trim() && submitted }" />
        <span v-if="!name.trim() && submitted" class="error-message">Ce champ est requis.</span>
  
        <!-- Champ de texte pour le courriel -->
        <label class="label">Courriel :</label>
        <input v-model="courriel" class="input" type="email" placeholder="Entrez votre courriel" :class="{ invalid: !isValidEmail(courriel) && submitted }" />
        <span v-if="!isValidEmail(courriel) && submitted" class="error-message">Entrez un courriel valide.</span>
  
        <!-- Champ de texte pour le numéro de téléphone -->
        <label class="label">Numéro de téléphone :</label>
        <input v-model="phone" class="input" type="tel" placeholder="Entrez votre numéro de téléphone" :class="{ invalid: !isValidPhone(phone) && submitted }" />
        <span v-if="!isValidPhone(phone) && submitted" class="error-message">Entrez un numéro valide.</span>
  
        <!-- Champ pour l'observation ou la raison de la prière -->
        <label class="label">Décrivez votre problème :</label>
        <textarea v-model="reason" class="input" rows="4" placeholder="Entrez la raison de la prière"></textarea>
  
        <!-- Liste des horaires -->
        <h3 class="title">Choisir un horaire</h3>
        <div v-for="(horaires, index) in schedules" :key="index" class="schedule-container">
          <p>Jour : {{ horaires.jour }}</p>
          <p>Début : {{ horaires.time_from }}</p>
          <p>Fin : {{ horaires.time_to }}</p>
          <p>Lieu : {{ horaires.lieu }}</p>
          <button class="btn-ok" @click="onOkTap(horaires.id)">M'inscrire</button>
        </div>
  
        <!-- Lien vers le groupe WhatsApp -->
        <button class="whatsapp-button" @click="openWhatsAppGroup">Rejoindre le groupe WhatsApp</button>
  
        <!-- Bouton retour -->
        <button class="return-button" @click="onBack">Retour</button>
  
        <!-- Bouton Soumettre -->
        <button class="submit-button" @click="onSubmit">Soumettre</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "FormulaireSansobs",
    props: {
      activity: {
        type: Object,
        default: () => ({
          id: null,
          titre: "Activité non spécifiée",
        }),
      },
      apiUri: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        schedules: [],
        token: localStorage.getItem("userToken") || "",
        usersInfos: {},
        name: "",
        courriel: "",
        phone: "",
        reason: "",
        submitted: false,
      };
    },
    mounted() {
      this.getUser();
      if (this.activity?.id) {
        this.getSchedules(this.activity.id);
      } else {
        console.warn("ID de l'activité manquant.");
      }
    },
    methods: {
      getSchedules(activity_id) {
        axios
          .get(`${this.apiUri}/activity-schedules?activity_id=${activity_id}`, {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          })
          .then((response) => {
            this.schedules = response.data;
          })
          .catch((error) => {
            console.error("Erreur lors de la récupération des horaires :", error);
          });
      },
      getUser() {
        axios
          .get(`${this.apiUri}/userInfos`, {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          })
          .then((response) => {
            this.usersInfos = response.data;
            this.name = `${this.usersInfos.nom || ""} ${this.usersInfos.prenom || ""}`;
            this.courriel = this.usersInfos.courriel || "";
            this.phone = this.usersInfos.telephone || "";
          })
          .catch((error) => {
            console.error("Erreur lors de la récupération des infos utilisateur :", error);
          });
      },
      onOkTap(activity_schedule_id) {
        const data = {
          activity_id: this.activity.id,
          activity_schedule_id,
          note: this.reason,
        };
  
        axios
          .post(`${this.apiUri}/inscription`, data, {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          })
          .then((response) => {
            if (response.data.message === "Inscription réussie.") {
              alert("Vous êtes inscrit.");
              this.onBack();
            } else {
              alert("Erreur lors de l'inscription.");
            }
          })
          .catch((error) => {
            console.error("Erreur lors de l'inscription :", error);
          });
      },
      openWhatsAppGroup() {
        const groupLink = "https://chat.whatsapp.com/votre_code_d'invitation"; // Remplacez par votre lien
        window.open(groupLink, "_blank");
      },
      onBack() {
        this.$router.go(-1);
      },
      isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      },
      isValidPhone(phone) {
        const regex = /^[0-9]{10,15}$/;
        return regex.test(phone);
      },
      onSubmit() {
        this.submitted = true;
        if (!this.name.trim() || !this.isValidEmail(this.courriel) || !this.isValidPhone(this.phone)) {
          alert("Veuillez corriger les erreurs.");
          return;
        }
        console.log("Données valides :", this.name, this.courriel, this.phone);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles pour Vue.js */
  .page {
    font-family: Arial, sans-serif;
  }
  
  .header {
    position: relative;
    width: 100%;
  }
  
  .background-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .logo {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 80px;
    height: auto;
  }
  
  .form-container {
    margin: 20px;
  }
  
  .label {
    margin-top: 10px;
    display: block;
  }
  
  .input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .invalid {
    border: 1px solid red;
  }
  
  .error-message {
    color: red;
    font-size: 0.8em;
    margin-top: -10px;
    margin-bottom: 10px;
  }
  
  .btn-ok,
  .whatsapp-button,
  .return-button,
  .submit-button {
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }
  
  .btn-ok {
    background-color: #007bff;
  }
  
  .whatsapp-button {
    background-color: #25d366;
  }
  
  .return-button {
    background-color: #6c757d;
  }
  
  .submit-button {
    background-color: #28a745;
  }
  </style>
  
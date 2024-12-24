<template>
    <div class="prayer-group-page">
      <!-- Image d'arrière-plan et logo -->
      <div class="header">
        <img
          class="background-image"
          src="@/assets/images/imageArriere.png"
          alt="Image d'arrière-plan"
        />
        <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
      </div>
  
      <!-- Contenu principal -->
      <div class="content">
        <h1 class="title">Groupe de Prière</h1>
        <p class="description">
          Le groupe de prière se réunit chaque jeudi à 20h15. Si vous voulez nous
          rejoindre, cliquez sur le bouton Zoom ci-dessous pour accéder à la réunion
          de prière.
        </p>
  
        <!-- Boutons -->
        <div class="button-container">
          <button class="zoom-button" @click="goToZoom">Zoom</button>
          <button class="return-button" @click="onBack">Retour</button>
        </div>
      </div>å
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToZoom() {
        window.open(
          "https://us02web.zoom.us/j/7478764062?pwd=U0FXeThiZUt0WS90MC9MQWdWbThiZz09",
          "_blank"
        );
      },
      onBack() {
        this.$router.back();
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles généraux */
  .prayer-group-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
  }
  
  .header {
    width: 100%;
    position: relative;
  }
  
  .background-image {
    width: 100%;
    height: 200px;
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
  
  .content {
    text-align: center;
    max-width: 600px;
    margin-top: 20px;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #003366;
  }
  
  .description {
    font-size: 16px;
    margin-bottom: 20px;
    color: #555;
  }
  
  /* Boutons */
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  
  .zoom-button {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #28a745;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .zoom-button:hover {
    background-color: #218838;
  }
  
  .return-button {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .return-button:hover {
    background-color: #0056b3;
  }
  </style>
  
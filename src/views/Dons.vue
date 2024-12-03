<template>
  <div class="dons-page">
    <!-- Image d'arrière-plan et logo -->
    <div class="header">
      <img
        class="background-image"
        src="@/assets/images/imageArriere.png"
        alt="Arrière-plan"
      />
      <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
    </div>

    <menuComponent />

    <!-- Contenu principal -->
    <div class="content">
      <h1 class="title">Dons</h1>

      <p class="description">Cliquez sur le lien suivant pour faire un don :</p>

      <!-- Lien pour faire un don -->
      <a
        href="https://www.votre-lien-de-don.com"
        target="_blank"
        class="don-link"
      >
        Faire un don
      </a>
    </div>
  </div>
</template>

<script>
import menuComponent from "../components/menu.vue";

export default {
  components: {
    menuComponent
  }
};
</script>

<style scoped>
/* Styles pour la page Dons */
.dons-page {
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
  left: 15%;
  transform: translate(-50%, -50%);
  height: 70px;
  width: 140px;
}

.content {
  max-width: 800px;
  text-align: center;
  margin-top: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.description {
  font-size: 16px;
  text-align: justify;
  line-height: 1.5;
  margin-bottom: 20px;
}

.don-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
}

.don-link:hover {
  background-color: #218838;
}
</style>

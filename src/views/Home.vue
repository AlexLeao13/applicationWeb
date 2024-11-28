<template>
  <div class="home-page">
    <!-- Conteneur de l'image d'arrière-plan avec le logo -->
    <div class="header">
      <img
        class="background-image"
        src="@/assets/images/imageArriere.png"
        alt="Background"
      />
      <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
    </div>

    <div class="content">
      <!-- Titre de la page -->
      <h1 class="title">Bienvenue sur l'Application</h1>

      <!-- Bouton pour s'inscrire -->
      <button class="btn-ok" @click="goToCreateAccount">S'inscrire</button>

      <!-- Bouton pour se connecter -->
      <button class="btn-ok" @click="goToSignin">Se connecter</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const userToken = ref(localStorage.getItem("userToken"));

    // Vérifie si un utilisateur est déjà connecté
    if (userToken.value) {
      router.push({ name: "AppPage" });
    }

    // Méthode pour naviguer vers la page de création de compte
    const goToCreateAccount = () => {
      router.push({ name: "CreateAccount" });
    };

    // Méthode pour naviguer vers la page de connexion
    const goToSignin = () => {
      router.push({ name: "Signin" });
    };

    return {
      goToCreateAccount,
      goToSignin,
    };
  },
};
</script>

<style scoped>
/* Styles pour la page Home */
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.btn-ok {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}

.btn-ok:hover {
  background-color: #0056b3;
}
</style>

<template>
  <!-- Menu horizontal -->
  <div class="menu">
    <router-link class="menu-button" to="accueil">Accueil </router-link>
    <router-link class="menu-button" to="accueil-fraternel"
      >Accueil Fraternel</router-link
    >
    <router-link class="menu-button" to="conference-mois"
      >Conférence du mois</router-link
    >
    <router-link class="menu-button" to="groupes-etudes"
      >GroupesEtudes</router-link
    >
    <router-link class="menu-button" to="dons">Dons</router-link>
    <router-link :to="'/' + $t('pt')">{{ $t("Português") }}</router-link>
  </div>
</template>
<style scoped>
/* Menu horizontal */
.menu {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}
.menu a {
  text-decoration: none;
}

.menu-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}

.menu-button:hover {
  background-color: #0056b3;
}
</style>

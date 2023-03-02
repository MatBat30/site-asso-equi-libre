<template>
  <v-form @submit.prevent="login">
    <v-text-field v-model="username" label="Nom d'utilisateur" type="username" />
    <v-text-field v-model="password" label="Mot de passe" type="password" />
    <v-btn type="submit">
      Se connecter
    </v-btn>
  </v-form>
</template>

<script>
export default {
}
</script>

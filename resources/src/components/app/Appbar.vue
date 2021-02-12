<template>
  <v-app-bar app clipped-left>
    <h1>Tittle</h1>

    <v-spacer></v-spacer>

    <v-btn v-if="!isAuth" @click="login" href="#">
      <v-icon>mdi-import</v-icon>
      <span>Войти</span>
    </v-btn>

    <v-btn v-else @click="logout" href="#">
      <v-icon>mdi-export</v-icon>
      <span>Выйти</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
import {HTTP} from '../../plugins/axios'
export default {
  data: () => ({
    isAuth: false
  }),
  methods: {
    login() {
      HTTP.get('/test')
      // this.isAuth = !this.isAuth
    },

    logout() {
      this.isAuth = !this.isAuth
    }
  }
}
</script>
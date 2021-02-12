<template>
  <!-- Material form login -->
  <form class="form">
    <p class="h4 text-center mb-4">Sign in</p>
    <div class="grey-text">
      <v-text-field v-model="email" label="Your email" type="email"/>
      <v-text-field v-model="password" label="Your password" type="password"/>
    </div>
    <div class="text-center">
      <v-btn type="submit">Logins</v-btn>
    </div>
  </form>
  <!-- Material form login -->
</template>

<script>
export default {
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  })
}
</script>

<style scoped>
  .form{
    margin: 0 auto;
    max-width: 500px;
  }
</style>
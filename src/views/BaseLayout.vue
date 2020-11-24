<template>
  <div class="home">
    <router-link to="/"></router-link>
    <router-link :to="{name: data.PageTemplate}">Обработать данные</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'BaseLayout',
  computed: {
    ...mapState(['data'])
  }
}
</script>

<style>
  .home {
    text-align: center;
    top: 50%;
  }
</style>

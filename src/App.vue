<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';

export default {
      name: 'App',
      components: {
            AppHeader
      }
}
</script>

<template>
      <AppHeader />

      <router-view></router-view>
</template>

<style lang="scss">
@import './styles/main.scss';
</style>

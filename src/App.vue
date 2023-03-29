<script>
import axios from 'axios';
import AppMain from './components/AppMain.vue';

export default {
      name: 'App',
      components: {
            AppMain,
      }
}
</script>

<template>
      <AppMain />
</template>

<style lang="scss">
@import './styles/main.scss';
</style>

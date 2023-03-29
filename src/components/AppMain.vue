<script>
import axios from 'axios';
import AppCard from './AppCard.vue';

export default {
      name: 'AppMain',
      components: {
            AppCard,
      },
      data() {
            return {
                  projects: []
            }
      },
      created() {
            axios
                  .get('http://127.0.0.1:8000/api/projects')
                  .then(response => {
                        console.log(response.data.projects.data);
                        this.projects = response.data.projects.data;
                  });
      }
}
</script>

<template>
      <div class="container">
            <div class="row mb-3">
                  <div class="col">
                        <h1>Boolfolio</h1>
                  </div>
            </div>

            <div class="row">
                  <div v-for="project in projects" class="card col-3" style="width: 18rem;">
                        <AppCard :card="project" />
                  </div>
            </div>
      </div>
</template>

<style lang="scss"></style>
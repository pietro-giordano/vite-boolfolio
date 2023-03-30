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
                  projects: [],
                  currentPage: 1,
                  lastPage: null
            }
      },
      methods: {
            getProjects() {
                  axios
                        .get('http://127.0.0.1:8000/api/projects', {
                              params: {
                                    page: this.currentPage
                              }
                        })
                        .then(response => {
                              console.log(response.data.projects.data);
                              this.projects = response.data.projects.data;
                              this.lastPage = response.data.projects.last_page;
                        });
            },

            changePage(n) {
                  this.currentPage = n;
                  this.getProjects();
            }
      },
      created() {
            this.getProjects();
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

            <div class="row mb-3">
                  <div v-for="project in projects" class="col-3 mb-4">
                        <AppCard :card="project" />
                  </div>
            </div>

            <div class="row mb-3">
                  <div class="col">
                        <div v-for="index in lastPage" class="d-inline-block me-2">
                              <button class="btn btn-primary" @click="changePage(index)">
                                    {{ index }}
                              </button>
                        </div>
                  </div>
            </div>
      </div>
</template>

<style lang="scss"></style>
<script>
import axios from 'axios';

export default {
      name: 'SingleProject',
      data() {
            return {
                  project: null,
                  defaultImg: 'https://www.repstatic.it/content/contenthub/img/2023/01/23/160655497-4ddb7de0-6e11-4607-b88c-54751447d99d.jpg'
            };
      },
      created() {
            axios
                  .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
                  .then(response => {
                        console.log(response.data);
                        if (response.data.success) {
                              this.project = response.data.project;
                        }
                        else {
                              this.$router.push({ name: 'not-found' });
                        }
                  });
      }
};
</script>

<template>
      <div class="container">
            <div class="row">
                  <div class="col">
                        <div v-if="project">
                              <div class="project-img">
                                    <img :src="project.image ?? defaultImg" :alt="project.title">
                              </div>
                              <h5>{{ project.title }}</h5>
                              <h6>
                                    <i class="fa-solid fa-tag"></i> {{ project.type ? project.type.name : 'Nessuna tipologia'
                                    }}
                              </h6>
                              <p class="card-text">
                                    {{ project.description }}
                              </p>
                              <div v-if="project.technologies.length > 0">
                                    <span class="badge text-bg-primary me-1" v-for="tech in project.technologies">
                                          {{ tech.name }}
                                    </span>
                              </div>
                              <div>
                                    <router-link :to="{ name: 'homepage' }" class="btn btn-primary mt-3">
                                          Torna indietro
                                    </router-link>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>
<style lang="scss" scoped>
.project-img {
      height: 250px;

      >img {
            height: 100%;
      }
}
</style>

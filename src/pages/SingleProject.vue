<script>
export default {
      name: 'AppCard',
      props: {
            card: Object
      }
}
</script>

<template>
      <div class="card" style="width: 18rem;">
            <img :src="card.image" class="card-img-top" alt="...">
            <div class="card-body">
                  <h3 class="card-title">{{ card.title }}</h3>
                  <h5 class="card-text">{{ card.type.name }}</h5>
                  <p class="card-text">{{ card.decription }}</p>

                  <div v-if="card.technologies.length > 0">
                        <ul class="list-group list-group-flush">
                              <li v-for="tech in card.technologies" class="list-group-item">
                                    {{ tech.name }}
                              </li>
                        </ul>
                  </div>
            </div>
      </div>
</template>

<style lang="scss"></style>
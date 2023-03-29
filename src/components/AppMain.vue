<script>
import axios from 'axios';

export default {
      name: 'AppMain',
      data() {
            return {
                  projects: []
            }
      },
      created() {
            axios
                  .get('http://127.0.0.1:8000/api/projects')
                  .then(response => {
                        console.log(response);
                  });
      }
}
</script>

<template>
      <div>

      </div>
</template>

<style lang="scss"></style>
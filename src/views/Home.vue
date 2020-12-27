<template>
  <section class="home">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="d-block">Welcome to VUE TEST PROJECT</h1>
          <router-link class="btn btn-primary" to="/table">
            Go to Table page
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home'
});
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;

  h1 {
    margin-bottom: 25px;
  }
}
</style>

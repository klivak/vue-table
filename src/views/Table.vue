<template>
  <section class="table">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Table page</h1>
        </div>
        <div class="col-12"></div>
        <div class="col-12">
          table
        </div>
        <div class="col-12">
          <div class="table-footer">
            <button class="btn btn-primary mr-2">
              Save to LocalStorage
            </button>
            <button class="btn btn-secondary">
              Load from LocalStorage
            </button>
          </div>
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
.table {
  padding-top: 25px;

  h1 {
    margin-bottom: 25px;
  }

  &-footer {
    margin-top: 15px;
  }
}
</style>

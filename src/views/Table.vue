<template>
  <section class="table">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Table page</h1>
        </div>
        <div class="col-12">
          <!-- <div class="filters">
            <div
              v-for="(title, index) in titles"
              :key="index"
              @click="toggleVisibility(title, index)"
            >
              <input type="checkbox" />
              {{ title }}
            </div>
          </div> -->
        </div>
        <div class="col-12">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th
                  v-for="(title, index) in titles"
                  :key="index"
                  scope="col"
                  @click.prevent="sortBy(title)"
                >
                  {{ title }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in sortedItems" :key="index">
                <th scope="row"><input v-model="item.name" /></th>
                <td><input v-model="item.height" /></td>
                <td><input v-model="item.mass" /></td>
                <td><input v-model="item.hair_color" /></td>
                <td><input v-model="item.skin_color" /></td>
                <td><input v-model="item.eye_color" /></td>
                <td><input v-model="item.birth_year" /></td>
                <td><input v-model="item.gender" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-12">
          <div class="pagination">
            <button @click.prevent="showPrevPage" class="btn btn-secondary">
              Previous page
            </button>
            <div>{{ currentPage }} / {{ items.length / pageSize }}</div>
            <button @click.prevent="showNextPage" class="btn btn-secondary">
              Next page
            </button>
          </div>
        </div>
        <div class="col-12">
          <hr />
          <div class="table-footer">
            <button @click.prevent="saveToLS" class="btn btn-primary mr-2">
              Save to LocalStorage
            </button>
            <button @click.prevent="getFromLS" class="btn btn-secondary">
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
import productsData from '../data/products.json';

export interface ObjectIndexer<T> {
  [id: string]: T;
}

export interface ProductItemInterface extends ObjectIndexer<string> {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  name: string;
  skin_color: string;
}

export interface ProductTitleInterface extends ObjectIndexer<string> {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  name: string;
  skin_color: string;
}

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      products: productsData,
      titles: {} as ProductTitleInterface,
      items: [{} as ProductTitleInterface],

      // sort
      currentSort: 'name',
      currentSortDirection: 'asc',

      // pagination
      pageSize: 10,
      currentPage: 1
    };
  },
  watch: {
    search() {
      this.currentPage = 1;
    }
  },
  computed: {
    sortedItems(): Array<{}> {
      return this.items
        .slice(0)
        .sort((a, b) => {
          let modifier = 1;
          if (this.currentSortDirection === 'desc') modifier = -1;
          if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
          return 0;
        })
        .filter((row, index) => {
          const start = (this.currentPage - 1) * this.pageSize;
          const end = this.currentPage * this.pageSize;
          if (index >= start && index < end) return true;
        });
    }
  },
  beforeMount() {
    this.initData();
  },
  mounted() {
    console.log(this.products);
  },
  methods: {
    initData() {
      this.titles = this.products.titles;
      this.items = this.products.items;
    },
    sortBy(s: string) {
      if (s === this.currentSort) {
        this.currentSortDirection =
          this.currentSortDirection === 'asc' ? 'desc' : 'asc';
      }
      this.currentSort = s;
      console.log('currentSort', this.currentSort);
      console.log('currentSortDirection', this.currentSortDirection);
    },
    showNextPage() {
      if (this.currentPage * this.pageSize < this.items.length) {
        this.currentPage++;
      }
    },
    showPrevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    toggleVisibility(name: string, index: string) {
      console.log('name', name);
      console.log('index', index);
    },
    saveToLS() {
      localStorage.setItem('titles', JSON.stringify(this.titles));
      localStorage.setItem('items', JSON.stringify(this.items));
    },
    getFromLS() {
      const titles = localStorage.getItem('titles');
      const items = localStorage.getItem('items');

      if (titles && items) {
        this.titles = JSON.parse(titles);
        this.items = JSON.parse(items);
      }
    }
  }
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

  tbody {
    input {
      width: 100px;
      border: 0;
    }
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>

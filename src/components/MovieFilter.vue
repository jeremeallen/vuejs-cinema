<template>
  <div id='movie-filter'>
      <h2>Filter results</h2>
      <div class='filter-group'>
        <check-filter 
          v-for='genre in genres' 
          :title='genre'
          @check-filter='checkFilter'
        ></check-filter>
      </div>
  </div>
</template>
<script>
  import CheckFilter from './CheckFilter.vue';
  import genres from '../util/genres';

  export default {
    name: 'movie-filter',
    methods: {
      checkFilter(category, title, checked) {
        this.$emit('check-filter', category, title, checked);
      },
    },
    components: {
      CheckFilter,
    },
    data() {
      return {
        genres,
      };
    },
  };
</script>

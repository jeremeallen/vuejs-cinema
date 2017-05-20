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
  import genres from '../util/genres';

  export default {
    name: 'movie-filter',
    methods: {
      checkFilter(category, title, checked) {
        this.$emit('check-filter', category, title, checked);
      },
    },
    components: {
        'check-filter': {
            template: `<div 
                          class='check-filter' 
                          @click='checkFilter' 
                          :class='{ "check-filter": true, active: checked}'
                        >
                        <span class='checkbox'></span>
                        <span class='check-filter-title'>
                          {{ title }}
                        </span>
                      </div>`,
            props: [
              'title',
            ],
            data() {
              return {
                checked: false,
              }
            },
            methods: {
              checkFilter() {
                this.checked = !this.checked;
                this.$emit('check-filter', 'genre', this.title, this.checked);
              },
            }
        },
      },
      data() {
        return {
          genres,
        };
      },
  };
</script>

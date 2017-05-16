import Vuew from 'vue';
import './style.scss';
import genres from './util/genres';

new Vuew({
  el: '#app',
  methods: {
    checkFilter(category, title, checked) {
      console.log(category, title, checked);
    },
  },
  components: {
    'movie-list': {
      template: `<div id='movie-list'>
                    <div v-for='movie in movies' class='movie'>
                      {{ movie.title }}
                    </div>
                  </div>`,
      data() {
        return {
          movies: [
            {title: 'Pulp Fiction'},
            {title: 'Home Alone'},
            {title: 'Austin Powers'},
          ],
        };
      },
    },
    'movie-filter': {
      template: `<div id='movie-filter'>
                    <h2>Filter results</h2>
                    <div class='filter-group'>
                      <check-filter 
                        v-for='genre in genres' 
                        :title='genre'
                        @check-filter='checkFilter'
                      ></check-filter>
                    </div>
                </div>`,
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
    },
  },
});
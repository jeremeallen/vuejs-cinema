import Vuew from 'vue';
import './style.scss';
import genres from './util/genres';

new Vuew({
  el: '#app',
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
                      <check-filter v-for='genre in genres' :title='genre'></check-filter>
                    </div>
                </div>`,
      components: {
        'check-filter': {
            template: `<div class='check-filter'>
                        <span class='checkbox'></span>
                        <span class='check-filter-title'>
                          {{ title }}
                        </span>
                      </div>`,
            props: [
              'title',
            ],
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
import { isInteger } from 'lodash';
import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: {
      type: String,
      require: true,
    },
    place: {
      type: String,
      require: true,
    },
    date: {
      type: Number,
      require: true,
    },
  },
  methods:{
    formatLocaleString(date){
     
      return new Date(date).toLocaleDateString(navigator.language, {
        year: 'numeric',
        month:'long',
        day: 'numeric',
      })
    },
    formatIsoDate(date){
      return new Date(date).toISOString().split('T')[0]
    },
  },
  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
        {{}}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="formatIsoDate(date)">{{ formatLocaleString(date) }}</time>
      </li>
    </ul>`,
});

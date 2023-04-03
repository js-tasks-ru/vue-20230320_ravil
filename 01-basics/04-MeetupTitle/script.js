import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';


const vm = createApp({
  data() {
    return {
      meetup: '',
    };
  },
  methods: {
    fetchMeetupById(meetupId) {
      // console.log(meetupId)
      return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((error) => {
            throw error;
          });
        }
      });
    }
  },
  watch: {
    meetupSelect() {
      console.log(id)
      console.log(meetup)
      //return this.fetchMeetupById(this.meetupID)
    }
    
  },
  computed: {
    
  }
  }).mount('#app');

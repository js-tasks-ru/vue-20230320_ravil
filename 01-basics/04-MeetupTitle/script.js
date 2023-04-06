import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

async function fetchMeetupById(meetupId) {

  const response = await fetch(`${API_URL}/meetups/${meetupId}`);
  if (response.ok) {
    return response.json();
  } else {
    return response.json().then((error) => {
      throw error;
    });
  }
}

const vm = createApp({
  data() {
    return {
      meetupId: 0,
      meetupName: '',
    };
  },
  methods: {
    
  },
  watch: {
    'meetupId': {
      deep: true,
      handler(){
        fetchMeetupById(parseInt(this.meetupId)).then((selectMeetup) => {
          this.meetupName = selectMeetup.title
        });
        
      }
    }
  }
  }).mount('#app');

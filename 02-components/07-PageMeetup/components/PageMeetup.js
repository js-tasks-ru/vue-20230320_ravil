import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from './../../06-MeetupView/./components/MeetupView';
import { fetchMeetupById } from '../meetupService.js';

export default defineComponent({
  name: 'PageMeetup',
  props : {
    meetupId: {
      type: Number,
      require: true
    }
  },
  data() {
    return {
      meetup: {},
      loading: false,
      error: ''
    }
  },
  components: {
    UiAlert,
    UiContainer,
    MeetupView
  },
  methods: {
    async fetchMeetup(id){
      this.loading = false
      this.error = false
      try {
        let getMeetup = await fetchMeetupById(id);
        this.meetup = getMeetup
        this.loading = true
       
      } catch(err) {
        this.error = true
        this.meetup = {}
        this.loading = true
      }

    }
  },
  created() {
    this.fetchMeetup(this.meetupId)
  },
  computed: {
    getMeetup() {
     return this.fetchMeetup(parseInt(this.meetupId))
    },
  },
  template: `
    <div class="page-meetup">
      <MeetupView v-if="loading && meetup && !error" :meetup="meetup" v-model="getMeetup"></MeetupView>

      <UiContainer v-if="!loading">
        <UiAlert :text="'Загрузка...'"><template v-slot:dafault></template></UiAlert>
      </UiContainer>

      <UiContainer v-else>
        <UiAlert :text="'Test Error'"><template v-slot:dafault></template></UiAlert>
      </UiContainer>

     
    </div>`,
});

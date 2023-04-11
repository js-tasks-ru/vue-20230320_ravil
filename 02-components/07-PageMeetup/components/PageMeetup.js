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
      meetup: null,
      loading: false,
      error: false
    }
  },
  components: {
    UiAlert,
    UiContainer,
    MeetupView
  },
  methods: {
    getMeetup(){
      this.loading = false
      this.error = false
      
      fetchMeetupById(this.meetupId).then((meetup) => {
        this.meetup = meetup
        this.loading = true
      }).catch((f)=>{
        this.error = true
      });
    }
  },
  created() {
    this.getMeetup()
  },
  watch: {
    'meetupId': {
      handler(){
        this.getMeetup()
      }
    }
  },
  computed: {
  },
  template: `
    <div class="page-meetup">
      <MeetupView v-if="loading && meetup" :meetup="meetup"></MeetupView>

      <UiContainer v-if="!loading && !error">
        <UiAlert :text="'Загрузка...'"></UiAlert>
      </UiContainer>

      <UiContainer v-if="error">
        <UiAlert :text="'Test Error'"></UiAlert>
      </UiContainer>

     
    </div>`,
});

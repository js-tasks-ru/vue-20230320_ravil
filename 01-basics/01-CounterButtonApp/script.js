import { createApp } from './vendor/vue.esm-browser.js';

const vm = createApp({
    data() {
      return {
        counter: 0
      };
    },
    methods: {
        handleClick(e) {
            this.counter += 1 
        }
    }
    }).mount('#app');
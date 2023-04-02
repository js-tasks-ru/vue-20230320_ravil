import { createApp } from './vendor/vue.esm-browser.js';

const vm = createApp({
    data() {
      return {
        one: 0,
        two: 0,
        operator: ''
      };
    },
    methods: {
       summ()  {
        let total = 0
        if (this.operator == 'sum')
            total = this.one + this.two
        else if(this.operator == 'subtract')
            total = this.one - this.two
        else if(this.operator == 'multiply')
            total = this.one * this.two
        else if(this.operator == 'divide')
            total = this.one / this.two
        return total
       }
    },
    computed: {
        total() {
            return this.summ()
        }
    }
    }).mount('#app');

import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count:{
        type: Number,
        default: () => 0,
      },
      setCount: {
        type: Function,
        require: true
    },
  },
  methods: {
    
  },
  computed: {
    send(value) {
      console.log(value)
      this.setCount(value + 1)
      //return value + 1
    }
  },
  // Компонент должен иметь входной параметр и порождать событие

  template: `<button type="button" @click="send(count)">{{count}}</button>`,
});

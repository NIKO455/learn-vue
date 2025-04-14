/* 
 * Event modifier in vue.js
 * These are the event we often use: .stop, .prevent, .self, .capture, .once, .passive
 * Vue.js provide the easiest way to implement, so we don't have to use the event.preventDefault() everywhere,
 * we can simple use the the event modifier when calling the event. Like: v-on:input.prevent=""
 * */

const vm = Vue.createApp({
  data() {
    return {
      name: 'John Doe',
      email: 'john@gmail.com',
      url: 'https://google.com',
      raw_html: `<a href="https://facebook.com" target="_blank">Facebook</a> <script>alert("Hello, world")</script>`,
      age: 20

    }
  },
  methods: {
    getName() {
      return `${this.name}`
    },
    increment() {
      this.age++
    },
    decrement() {
      this.age--
    },
    handleEmailChange(msg, event) {
      // no need to write this 
      // event.preventDefault();

      console.log(msg)

      this.email = event.target.value;
    }
  }
}).mount('#app');



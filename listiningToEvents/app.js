/* 
 * We can use the both method to bind the data 
 * 1. v-model
 * 2. v-bind:value= + v-on:input=
 * They do exactly same thing but if we need the more controll over the data and want to perform some action on the key action of etc
 * then we can use the (2) option and if we want to write less code and make the code clean then we can use v-model
 *
 * 
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
    handleEmailChange(event) {
      this.email = event.target.value;
    }
  }
}).mount('#app');



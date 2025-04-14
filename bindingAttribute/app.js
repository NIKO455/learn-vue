/* 
 * If we want to have a dynamic value of the attribute class and the id then
 * Vue.js also provide the feature in itself v-bind and other different
 * 
 * */

const vm = Vue.createApp({
  data() {
    return {
      name: 'John Doe',
      email: 'john@gmail.com',
      url: 'https://google.com'

    }
  },
  methods: {
    getName() {
      return `${this.name}`
    }
  }
}).mount('#app');



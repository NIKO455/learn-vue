/*
 * methods: methods are the place where all the functions that are used in the file is stored or written
 * */

const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',

    }
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`
    }
  }
}).mount('#app');



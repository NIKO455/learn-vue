/*
 *  if we assing two id or class that is mounting to the app then the first one is load and the second one is removed by the vue it self
 *
 * */

Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',

    }
  }
}).mount('#app');

Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',

    }
  }
}).mount('#app2');

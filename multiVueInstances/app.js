/*
 * Expressions: It is the code inside the curly brackets. Eg: {{ firstName }}
 * String Interpolation: It is process of replacing placeholder into string value. Eg: inplace of {{ firstName }} replacing with the actual data is interpolation
 *
 *
 * To access the value into the app we must declare into the data.
 * And the value declared inside the data can't be accessed outside the #app id wrapper
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

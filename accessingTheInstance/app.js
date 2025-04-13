/*
 * What is proxy ?
 * => A figure that can be used to represent the value of something in a calculation. It is developed by the vue itself. It works as the getter and setter. 
 *
 * This is how the data is accessed in the vue without proxy
 * vm.$data.firstName
 * vm.$data.lastName
 *
 * This is how data is accessed in the vue with the proxy
 * vm.firstName
 * vm.lastName
 *
 * */

const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',

    }
  }
}).mount('#app');

setTimeout(() => {
  // this is non proxy method
  console.log(vm.$data.lastName)

  // this is proxy method
  vm.firstName = 'Bob'
}, 2000);



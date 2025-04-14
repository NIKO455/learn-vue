/* 
 * we don't use the curly brackets for the directives because this is automatically assumed as the expression by the vue.js
 * 
 * Reactivity: Reactivity is when any changes to the data is immediatly reflected on the page.
 * 
 * In Vanilla JS to make reactivity we do:
 * const input = document.getElementById('first-name');
 * input.addEventListener('keyup',function(){
 *    const p = document.querySelectory('p');
 *    p.innerText = this.value;
 * })
 * 
 * if we have thousands of the field that has to track the reactivity then it become a huge file and very difficult.
 * so the vue.js solves the problem by it self.
 * 
 * */

const vm = Vue.createApp({
  data() {
    return {
      name: 'John Doe',
      email: 'john@gmail.com',

    }
  },
  methods: {
    getName() {
      return `${this.name}`
    }
  }
}).mount('#app');



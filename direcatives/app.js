/* Vue directives are special HTML attributes with the prefix v- that give the HTML tag extra functionality.
 * Vue directives connect to the Vue instance to create dynamic and reactive user interfaces.
 * With Vue, creating responsive pages is much easier and requires less code compared to traditional JavaScript methods.
 * 
 * Example of Vue Directive: 
 * => v-bind: Connects an attribute in a HTML tag to a data variable inside the vue instance
 * => v-if: For the conditional rendering
 * => v-show: to hide and show on the specific condition
 * => v-for: it is used for the loop of the array
 * => v-on: Connects an event on an HTML tag to a JavaScript expression or a Vue instance method. We can also define more specifically how our page should react to a certain event by using event-modifiers( submit, click, keyup).
 * => v-model: Used in HTML forms with tags like <form>, <input> and <button>. Creates a two way binding between an input element and a Vue instance data property.
 * 
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



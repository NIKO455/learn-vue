/* 
 * When a browser handles an event, like a form submission or clicking a link, it does something automatically — this is the default behavior.
 * Using event.preventDefault() tells the browser:
 * "Hey, don’t do what you normally would — I’ve got it covered."
 * 
 * For Example: 
 * if we are trying to submit the form then it's default behavior is to submit the data and reload, so if we allow the form to do his default behavior then the data is lost, so we vue event.preventDefault() so that the default behavior can be replaced by the desired thing we can do. Link api calling etc to insert data
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
      event.preventDefault();

      console.log(msg)

      this.email = event.target.value;
    }
  }
}).mount('#app');



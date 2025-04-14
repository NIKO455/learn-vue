/* 
 * Cross Site Scripting(XSS): When malicious or harmful HTML is injected into the webpage causing unintended behavior in the brower.
 * Many times we will render the data from the other website and the html document directly which may inject the malicious HTML into our website
 * 
 * 
 *
 * 
 * */

const vm = Vue.createApp({
  data() {
    return {
      name: 'John Doe',
      email: 'john@gmail.com',
      url: 'https://google.com',
      raw_html: `<a href="https://facebook.com" target="_blank">Facebook</a> <script>alert("Hello, world")</script>`

    }
  },
  methods: {
    getName() {
      return `${this.name}`
    }
  }
}).mount('#app');



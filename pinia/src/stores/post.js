import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', {
    state: () => ({
        posts: []
    }),
    actions: {
        async fetchPostData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            this.posts = data
        },
    },
})

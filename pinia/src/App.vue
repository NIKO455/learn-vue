<script>
import {useCounterStore} from './stores/counter.js'
import {usePostStore} from './stores/post.js'
import {mapStores, mapState, mapActions} from 'pinia'

  export default{
    data(){
      return {
        appName: 'Pinia'
      }
    },
    computed: {
      ...mapStores(useCounterStore, usePostStore),
      ...mapState(useCounterStore, ['count', 'doubleCount', 'name']),
      ...mapState(usePostStore, ['posts']),
      appNameLength(){
        return this.appName.length
      }
    },
    methods:{
      ...mapActions(useCounterStore, ['increment']),
      ...mapActions(usePostStore, ['fetchPostData'])
    },
    mounted(){
      this.fetchPostData();
    }
  }
</script>

<template>
  <div v-for="post in posts" :key="post.id">
      {{ post.title }}
  </div>
</template>

<style scoped>
</style>

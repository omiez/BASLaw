<template>
  <div>
    <h1 class="title">{{article ? article.Title : null}}</h1>
    <!-- <img v-if="article" :src="baseUrl + article.Image[0].url"/> -->
    <div v-if="article"  class="abstract" v-html="article.Content"></div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    // Simple query that will update the page content
    article: {
        query: gql`query ($id: ID!){
            article(id:$id){
              id
              Published
              Title
              Content
              Image(limit:1) {
                url
              }
            }
        }`,
        variables(){
          return {
            id: this.$route.query.id
          }
        },
        prefetch: false
      }
  },
  computed: {
    // 时间降序后的博客列表
    baseUrl () {
      return process.env.BACKEND_URL || '';
    }
  }
}

</script>
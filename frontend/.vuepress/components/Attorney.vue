<template>
  <div>
    <h1 class="title">{{attorney ? attorney.Name : null}}</h1>
    <img v-if="attorney" :src="baseUrl + attorney.Photo[0].url"/>
    <div v-if="attorney" class="abstract" v-html="attorney.Summary"></div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    // Simple query that will update the page content
      attorney: {
        query: gql`query ($id: ID!) {
            attorney(id:$id) {
              Title
              Name
              Summary
              Photo(limit:1) {
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
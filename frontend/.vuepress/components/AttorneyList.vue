<template>
  <!-- 博客列表 -->
  <ModuleTransition delay="0.08">
    <div  class="attorneys-wrapper">
      <AttorneyItem
        v-show="recoShowModule"
        class="list"
        v-for="(item) in attorneys"
        :key="item.name"
        :item="item"
        :currentPage="currentPage"
        :currentTag="currentTag"></AttorneyItem>
    </div>
  </ModuleTransition>
</template>

<script>
import Common from '@theme/components/Common'
import TagList from '@theme/components/TagList'
import AttorneyItem from './AttorneyItem'
import pagination from '@theme/mixins/pagination'
import ModuleTransition from '@theme/components/ModuleTransition'
import moduleTransitonMixin from '@theme/mixins/moduleTransiton'
import gql from 'graphql-tag';

export default {
  mixins: [pagination, moduleTransitonMixin],
  components: { Common, TagList, ModuleTransition },

  data () {
    return {
      tags: [],
      currentTag: '',
      currentPage: 1,
      allTagName: '',
      attorneys : []
    }
  },

  apollo: {
    // Simple query that will update the page content
      attorneys: {
        query: gql`query {
            attorneys {
              Title
              Name
              Summary
              Photo(limit:1) {
                url
              }
            }
        }`,
        prefetch: false
      }
  },

  created () {
    this.currentTag = this.$recoLocales.tag.all
    this.allTagName = this.$recoLocales.tag.all
    if (this.$tags.list.length > 0) {
      this.currentTag = this.$route.query.tag ? this.$route.query.tag : this.currentTag
    }
  },

  computed: {
    // 时间降序后的博客列表
    posts () {
      let posts = [
        {
          path:'maya',
          title: 'Maya Azriel',
          img:'/img/maazriel.jpg',
          frontmatter: {},
          excerpt: 'מאיה היא עורכת דין נפלאה'
        },
        {
          path:'maya2',
          title: 'Maya Azriel',
          img:'/img/maazriel.jpg',
          frontmatter: {},
          excerpt: 'מאיה היא עורכת דין נפלאה'
        },
        {
          path:'maya3',
          title: 'Maya Azriel',
          img:'/img/maazriel.jpg',
          frontmatter: {},
          excerpt: 'מאיה היא עורכת דין נפלאה'
        },
        {
          path:'maya4',
          title: 'Maya Azriel',
          img:'/img/maazriel.jpg',
          frontmatter: {},
          excerpt: 'מאיה היא עורכת דין נפלאה'
        }
      ]
      return posts
    }
  },

  mounted () {
    this._setPage(this._getStoragePage())
  },

  methods: {

    tagClick (tagInfo) {
      if (this.$route.path !== tagInfo.path) {
        this.$router.push({ path: tagInfo.path })
      }
    },

    getCurrentTag (tag) {
      this.$emit('currentTag', tag)
    },

    getCurrentPage (page) {
      this._setPage(page)
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 100)
    },
    _setPage (page) {
      this.currentPage = page
      this.$page.currentPage = page
      this._setStoragePage(page)
    }
  }
}
</script>

<style src="@theme/styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
.tags-wrapper
  max-width: $contentWidth
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0;

@media (max-width: $MQMobile)
  .tags-wrapper
    padding: 5rem 0.6rem 0;

.abstract-item
  margin-bottom: 4rem !important;
  width: 31% !important;
  height: 300px !important;
  transition: all .5s !important;
  margin 0;

.attorneys-wrapper
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
</style>

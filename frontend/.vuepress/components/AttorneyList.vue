<template>
  <!-- 博客列表 -->
  <ModuleTransition delay="0.08">
    <div>
      <h1 style="margin-top: -22px;">הצוות שלנו</h1>
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
              id
              Title
              Name
              Summary
              Sex
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
.pagetitle
  text-align center

h1
    color: #31799a;
    display: inherit;
    text-align: center;
    font-size: 2.6rem;
</style>

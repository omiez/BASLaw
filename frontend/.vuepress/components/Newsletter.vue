<template>
    <ModuleTransition delay="0.08">
    <div  class="abstract-wrapper"> 


    <div
    class="abstract-item"
    v-for="(article) in articles"
        :key="article.id"
    >
    <div class="title">
      <span>עו״ד</span> <router-link :to="{ path: '/newsletter/article/', query: { id: article.id }}">{{article.Title}}</router-link>
    </div>
    <img v-if="article.Image[0]" :src="baseUrl + article.Image[0].url"/>
    <!-- <div class="abstract" v-html="article.Content"></div> -->
    <div class="abstract">
        במטרה לעודד חזרת משקיעים לביצוע עסקאות נדל"ן בישראל, ועל מנת להגביר את הפעילות בתחום הנדל"ן אשר הואטה משמעותית בחודשים האחרונים בשל משבר הקורונה, אישרה הכנסת ביום 29.7.2020 את חוק התכנית לסיוע כלכלי (נגיף הקורונה החדש - מענק חד–פעמי) (הוראת שעה ותיקוני חקיקה), התש"ף-2020 (להלן: "החוק").
    </div>
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
    components: { Common, TagList, ModuleTransition },
    apollo: {
    // Simple query that will update the page content
      articles: {
        query: gql`query {
            articles {
              id
              Published
              Title
              Content
              Image(limit:1) {
                url
              }
            }
        }`,
        prefetch: false
      }
  },
}


</script>

<style lang="stylus" scoped>
@require '../../node_modules/vuepress-theme-reco/styles/mode.styl'
.abstract-item
  position relative
  margin: 0 auto 20px;
  padding: 16px 20px;
  width 100%
  overflow: hidden;
  border-radius: $borderRadius
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition all .3s
  background-color var(--background-color)
  cursor: pointer;
  > * {
    pointer-events: auto;
  }
  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  &:hover
    box-shadow: var(--box-shadow-hover)
  .title
    position: relative;
    font-size: 1.28rem;
    line-height: 46px;
    display: inline-block;
    a
      color: var(--text-color);
    .reco-lock
      font-size 1.28rem
      color $accentColor
    &:after
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: .3s ease-in-out;
    &:hover a
      color $accentColor
    &:hover:after
      visibility visible
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
  .tags
    .tag-item
      &.active
        color $accentColor
      &:hover
        color $accentColor
@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;
</style>
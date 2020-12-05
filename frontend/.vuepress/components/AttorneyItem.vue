<template>
  <div
    class="abstract-item"
    >
    <div>{{getTitleName(item.Title)}}</div>
    <div class="title">
      <!-- <router-link>{{item.title}}</router-link> -->
      <span>עו״ד</span> {{item.Name}}
    </div>
    <img v-if="item.Photo[0]" :src="'http://localhost:1337' + item.Photo[0].url"/>
    <div class="abstract" v-html="item.Summary"></div>
  </div>
</template>

<script>
import PageInfo from '@theme/components/PageInfo'
export default {
  components: { PageInfo },
  props: ['item', 'currentPage', 'currentTag'],
  methods: {
        getTitleName(title) {
      switch (title) {
        case "namepartner":
          return 'שותפה מייסדת';
        case "partner":
          return 'שותפה';
        default:
          return '';   
      }
    }
  }
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

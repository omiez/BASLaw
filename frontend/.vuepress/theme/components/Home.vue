  <template>
  <main
    class="home"
    aria-labelledby="main-title"
  >
    <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

      <h1
        v-if="data.heroText !== null"
        id="main-title"
      >
        {{ data.heroText || $title || 'Hello' }}
      </h1>

      <p
        v-if="data.tagline !== null"
        class="description"
      >
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        v-if="data.actionText && data.actionLink"
        class="action"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </header>

    <div
      v-if="data.features && data.features.length"
      class="features"
    >
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <h2>{{ (pageContent && pageContent.title) || featureTitle || feature.title }}</h2>
        <p>{{ (pageContent && pageContent.content) || pageContent || feature.details }}</p>
        
      </div>
      <div class="feature vid" >
        <iframe class="youtubeFrame" width="560" height="315" src="https://www.youtube.com/embed/KLkjZ9Rwm30" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div class="feature" >
    </div>

    <Content class="theme-default-content custom" />

    <div
      v-if="data.footer"
      class="footer"
    >
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import gql from 'graphql-tag';
// import axios from 'axios'

export default {
  name: 'Home',

  components: { NavLink },

    data() {
      return {
          pageContent: null,
          featureTitle: null
      }
    }, 

    // mounted() {
    //   axios.get('http://' + window.location.hostname + ':1337/page-content').then(response => {
    //     this.pageContent = response.data.content
    //     this.featureTitle = response.data.title
    //   })
    // },

    apollo: {
    // Simple query that will update the page content
      pageContent: {
        query: gql`query PageContent {
          pageContent {
            content
            title
          }
        }`,
        prefetch: false
      }
    },

    computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
 $textColor = #ffffff

.vid
  width: 500px
  margin: 0
  padding: 0 !important
  iframe
    margin: 0 auto;

@media (max-width: $MQMobile)
  .sidebar
    transform translateX(100%)

body
  overflow-x hidden

.home
  @media (max-width: $MQMobile)
    .youtubeFrame
      left 0 !important
      width: 90vw;
    .hero
      height "calc(100vh - %s)" % $navbarHeight

  .youtubeFrame
    position: relative
    width: 100%;

  padding $navbarHeight 2rem 0
  max-width $homePageWidth
  margin 0px auto
  display block

  .hero
    color #ffffff
    min-height 515px
    text-align center
    overflow visible
    margin 0 -2rem;
    position relative
    *
      position inherit
    img
      width 100vw
      margin -1.8rem 0
      height 100%
      object-fit cover
      display block
      position absolute
      left 50%
      transform translateX(-50%)
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 45%
    $textColor = #000000
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)


@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>

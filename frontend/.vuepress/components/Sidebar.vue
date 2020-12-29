<template>
  <aside class="sidebar">
    <slot name="top"/>
    <NavLinks/>
    <SidebarLinks v-if="$route.path === '/attorney/'" :depth="0" :items="attorneys" />
    <slot name="bottom"/>
  </aside>
</template>

<script>
import SidebarLinks from './SidebarLinks'
import NavLinks from '@theme/components/NavLinks'
import gql from 'graphql-tag';

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks },

  props: ['items'],

  apollo: {
  // Simple query that will update the page content
    attorneys: {
      query: gql`query {
          attorneys {
            id
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
}
</script>

<style lang="stylus">
.sidebar
  &&::-webkit-scrollbar
    width: 0
    height: 0
  .personal-info-wrapper
    display none
  ul
    padding 0
    margin 0
    list-style-type none
    &.sidebar-links
      > li
        background $accentColor
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid var(--border-color)
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1em
      line-height 1.7
      font-weight 500
    & > li:not(:first-child)
      margin-top .75rem

@media (max-width: $MQMobile)
  .sidebar
    .personal-info-wrapper
      display block
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>

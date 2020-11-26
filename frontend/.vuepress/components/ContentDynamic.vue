<template>
	<div>
		<h2>{{ (pageContent && pageContent.title) }}</h2>
    	<p>{{ (pageContent && pageContent.content) }}</p>
	</div>
</template>

<script>
	import gql from 'graphql-tag';
	export default {
		 data () {
    		return {
    			pageContent: null
    		}
    	},
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
	}
</script>
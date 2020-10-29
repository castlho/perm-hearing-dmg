<script>
  import ArticleCover from './ArticleCover.svelte'
  import ArticleContent from './ArticleContent.svelte'
  import { siteTitle } from '../../libs/metadata'

  /**
   * Article data
   */
  export let article = {}

  /**
   * Article description
   * @type {string}
   */
  $: metaDescription = article.description || ''
  /**
   * Article title
   * @type {string}
   */
  $: metaTitle = article.title ? `${article.title} | ${siteTitle}` : ''
</script>

<svelte:head>
  {#if metaTitle}
    <title>{metaTitle}</title>
    <meta content="{metaTitle}" property="og:title">
    <meta content="{metaTitle}" name="twitter:title">
  {/if}

  {#if metaDescription}
    <meta content="{metaDescription}" name="description">
    <meta content="{metaDescription}" property="og:description">
    <meta content="{metaDescription}" name="twitter:description">
  {/if}
</svelte:head>

<article class="article">
  <ArticleCover coverImage="{article.coverImage}"
                createdDate="{article.createdDate}"
                description="{article.description}"
                title="{article.title}" />
  <ArticleContent html="{article.html}" />
</article>

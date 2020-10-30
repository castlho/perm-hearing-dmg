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

  /** Article title */
  $: metaTitle = article.title ? `${article.title} | ${siteTitle}` : ''
</script>

<style>
  @media (max-width: 767px) {
    .article :global(.article-cont) {
      margin-top: 2.75rem;
    }
  }

  @media (min-width: 768px) {
    .article :global(.article-cont) {
      margin-top: 3.5rem;
    }
  }
</style>

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
                title="{article.title}" />
  <ArticleContent html="{article.html}" />
</article>

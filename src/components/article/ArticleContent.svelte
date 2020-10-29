<script>
  /**
   * Article body content HTML
   * @type {*}
   */
  export let html
</script>

<style>
  .article-cont :global(iframe) {
    display: block;
    max-width: 100%;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .article-cont :global(.article-embed.article-embed--ig iframe) {
    width: 100%;
    max-width: 500px;
  }

  @media (max-width: 767px) {
    .article-cont {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    .article-cont :global(p) {
      margin-top: 1.5rem;
    }
    .article-cont :global(iframe) {
      margin-top: 2rem !important;
      margin-bottom: 2rem !important;
    }
  }

  @media (min-width: 768px) {
    .article-cont {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .article-cont :global(p) {
      margin-top: 2rem;
    }
    .article-cont :global(iframe) {
      margin-top: 2.5rem !important;
      margin-bottom: 2.5rem !important;
    }
  }
</style>

<section class="article-cont">
  {@html html}
</section>

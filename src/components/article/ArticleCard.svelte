<script>
  /**
   * Article data
   */
  export let article = {}

  /**
   * Article byline
   */
  $: byline = `${article.createdDate}${
    article.createdDate && article.description ? ' // ' : ''
  }${article.description || ''}`
  /**
   * URI-encoded article URL slug
   */
  $: slugEncoded = encodeURI(article.slug)
</script>

<style>
  .artl-card {
    display: block;
    position: relative;
    text-decoration: none;
    color: #00338C;
  }
  .artl-card:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #D3F0FF;
    z-index: -1;
    transition: transform .3s ease;
  }

  @media (max-width: 767px) {
    .artl-card {
      padding: 1rem;
    }
    .artl-card:after {
      border-radius: .5rem;
      transform: skew(-2.75deg, 1deg);
    }
    .artl-card__byline {
      margin-top: .25rem;
      font-size: 1rem;
    }

    .artl-card:active:after {
      transform: scale(1.02) skew(2deg, -1deg);
    }
  }

  @media (min-width: 768px) {
    .artl-card {
      padding: 1.5rem 2rem;
    }
    .artl-card:after {
      border-radius: .75rem;
      transform: skew(-3deg, 1.25deg);
    }
    .artl-card__byline {
      margin-top: .5rem;
      font-size: 1.125rem;
    }

    .artl-card:hover:after {
      transform: scale(1.02) skew(2deg, -1deg);
    }
  }
</style>

<a class="artl-card" rel="prefetch"
   href="blogs/{slugEncoded}"
   title="{article.title}">
  <h2>{article.title}</h2>
  {#if byline}
    <p class="artl-card__byline">{byline}</p>
  {/if}
</a>

<script>
  /** Article byline */
  export let byline = ''

  /** Article URL slug */
  export let slug = ''

  /** Article title */
  export let title = ''

  /** URI-encoded article URL slug */
  $: slugEncoded = encodeURI(slug)
</script>

<style>
  .article-crd {
    display: block;
    position: relative;
    text-decoration: none;
    color: #00338C;
  }
  .article-crd:after {
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
  .article-crd__byline {
    font-style: italic;
  }

  @media (max-width: 767px) {
    .article-crd {
      padding: 1rem;
    }
    .article-crd:after {
      border-radius: .5rem;
      transform: skew(-2.75deg, 1deg);
    }
    .article-crd__byline {
      margin-top: .25rem;
      font-size: 1rem;
    }

    .article-crd:active:after {
      transform: scale(1.02) skew(2deg, -1deg);
    }
  }

  @media (min-width: 768px) {
    .article-crd {
      padding: 1.5rem 2rem;
    }
    .article-crd:after {
      border-radius: .75rem;
      transform: skew(-3deg, 1.25deg);
    }
    .article-crd__byline {
      margin-top: .5rem;
      font-size: 1.125rem;
    }

    .article-crd:hover:after {
      transform: scale(1.02) skew(2deg, -1deg);
    }
  }
</style>

<a class="article-crd" rel="prefetch"
   href="blogs/{slugEncoded}" title="{title}">
  <h2>{title}</h2>
  {#if byline}
    <p class="article-crd__byline">{byline}</p>
  {/if}
</a>

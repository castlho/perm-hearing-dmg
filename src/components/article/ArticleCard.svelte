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
  }
  .article-crd__byline {
    font-style: italic;
  }

  @media (max-width: 767px) {
    .article-crd {
      padding: 1rem 1.5rem;
    }
    .article-crd:after {
      transform: var(--skew-mobile);
    }
    .article-crd__byline {
      margin-top: .25rem;
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    .article-crd {
      padding: 1.5rem 2rem;
    }
    .article-crd:after {
      transform: var(--skew-desktop);
    }
    .article-crd__byline {
      margin-top: .5rem;
      font-size: 1.125rem;
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

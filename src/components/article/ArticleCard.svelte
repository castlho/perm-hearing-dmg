<script>
  /** Article byline */
  export let byline = ''

  /** Article cover image */
  export let coverImage = ''

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
    color: var(--navy);
  }
  .article-crd:after {
    content: '';
    position: absolute;
    top: 1.5rem;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--blue);
    z-index: -1;
  }

  .article-crd__img {
    position: relative;
  }
  .article-crd__img:before {
    content: '';
    display: block;
    width: 100%;
    padding-top: 40%;
    pointer-events: none;
  }
  .article-crd__img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
  }

  .article-crd__byline {
    font-style: italic;
  }

  @media (max-width: 767px) {
    .article-crd {
      padding: 0 1.5rem 1rem;
    }
    .article-crd:after {
      transform: var(--skew-mobile);
    }

    .article-crd__img {
      width: calc(100% + 3rem);
      margin-left: -1.5rem;
      margin-right: -1.5rem;
      margin-bottom: 1rem;
    }

    .article-crd__byline {
      margin-top: .25rem;
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    .article-crd {
      padding: 0 2rem 1.25rem;
    }
    .article-crd:after {
      transform: var(--skew-desktop);
    }

    .article-crd__img {
      width: calc(100% + 4rem);
      margin-left: -2rem;
      margin-right: -2rem;
      margin-bottom: 1.25rem;
    }

    .article-crd__byline {
      margin-top: .5rem;
      font-size: 1.125rem;
    }
  }
</style>

<a class="article-crd" rel="prefetch"
   href="blogs/{slugEncoded}" title="{title}">
  {#if coverImage}
    <figure class="article-crd__img">
      <img width="1200" height="628"
           alt="{title}" src="{coverImage}"
           title="{title}" />
    </figure>
  {/if}
  <h2>{title}</h2>
  {#if byline}
    <p class="article-crd__byline">{byline}</p>
  {/if}
</a>

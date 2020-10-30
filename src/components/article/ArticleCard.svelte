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
    color: var(--white);
  }
  .article-crd:after {
    content: '';
    position: absolute;
    background-color: var(--navy);
    z-index: -1;
  }

  .article-crd__img {
    position: relative;
  }
  .article-crd__img:before {
    content: '';
    display: block;
    width: 100%;
    padding-top: 52.33333%;
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
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  @media (max-width: 767px) {
    .article-crd {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    .article-crd:after {
      top: 1.5rem;
      bottom: -1rem;
      left: .5rem;
      right: -.75rem;
    }

    .article-crd__img {
      width: calc(100% + 3.25rem);
      margin-left: -2.25rem;
      margin-bottom: 1rem;
    }

    .article-crd__byline {
      margin-top: .125rem;
      font-size: .875rem;
    }
  }

  @media (min-width: 768px) {
    .article-crd {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .article-crd:after {
      top: 2rem;
      bottom: -1.25rem;
      left: .75rem;
      right: -1rem;
    }

    .article-crd__img {
      width: calc(100% + 4.25rem);
      margin-left: -3rem;
      margin-bottom: 1.25rem;
    }

    .article-crd__byline {
      margin-top: .25rem;
      font-size: 1rem;
    }
  }
</style>

<a class="article-crd" rel="prefetch"
   href="blogs/{slugEncoded}" title="{title}">
  {#if coverImage}
    <figure class="article-crd__img">
      <img width="1200" height="628"
           loading="lazy" alt="{title}"
           src="{coverImage}" title="{title}" />
    </figure>
  {/if}
  <h2>{title}</h2>
  {#if byline}
    <p class="article-crd__byline">{byline}</p>
  {/if}
</a>

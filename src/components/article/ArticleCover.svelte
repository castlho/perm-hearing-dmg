<script>
  /** Article byline */
  export let byline = ''

  /** Article cover image */
  export let coverImage = ''

  /** Article title */
  export let title = ''
</script>

<style>
  .article-cvr {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    color: var(--navy);
  }
  .article-cvr:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--blue);
    z-index: -1;
  }

  .article-cvr__img {
    position: relative;
  }
  .article-cvr__img:before {
    content: '';
    display: block;
    width: 100%;
    padding-top: 52.33333%;
    pointer-events: none;
  }
  .article-cvr__img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
  }

  .article-cvr__byline {
    font-style: italic;
  }

  @media (max-width: 767px) {
    .article-cvr {
      padding: 1rem 1.5rem;
    }
    .article-cvr:after {
      transform: var(--skew-mobile);
    }

    .article-cvr__img {
      width: calc(100% + 3rem);
      margin-left: -1.5rem;
      margin-right: -1.5rem;
      margin-bottom: 1.25rem;
    }

    hr {
      margin-top: .75rem;
      margin-bottom: .75rem;
    }
    .article-cvr__byline {
      margin-top: .25rem;
    }
  }

  @media (min-width: 768px) {
    .article-cvr {
      padding: 1.5rem 2rem;
    }
    .article-cvr:after {
      transform: var(--skew-desktop);
    }

    .article-cvr__img {
      width: calc(100% + 4rem);
      margin-left: -2rem;
      margin-right: -2rem;
      margin-bottom: 1.75rem;
    }

    hr {
      margin-top: 1.25rem;
      margin-bottom: 1.25rem;
    }
    .article-cvr__byline {
      margin-top: .5rem;
    }
  }
</style>

<section class="article-cvr">
  {#if coverImage}
    <figure class="article-cvr__img">
      <img width="1200" height="628"
           alt="{title}" src="{coverImage}"
           title="{title}" />
    </figure>
  {/if}
  <h1>{title}</h1>
  {#if byline}
    {#if !coverImage}
      <hr />
    {/if}
    <p class="article-cvr__byline">{byline}</p>
  {/if}
</section>

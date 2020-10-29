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
    color: #00338C;
  }
  .article-cvr:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #D3F0FF;
    z-index: -1;
  }

  .article-cvr__img {
    position: relative;
    padding-top: 52.33333%;
    overflow: hidden;
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
      padding: 1.25rem 1.5rem 1rem;
    }
    .article-cvr:after {
      transform: var(--skew-mobile);
    }

    .article-cvr__img {
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
      padding: 2rem 2rem 1.5rem;
    }
    .article-cvr:after {
      transform: var(--skew-desktop);
    }

    .article-cvr__img {
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
      <img alt="{title}" src="{coverImage}"
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

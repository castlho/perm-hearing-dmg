<script>
  /** Article cover image */
  export let coverImage = ''

  /** Article created date */
  export let createdDate = ''

  /** Article description */
  export let description = ''

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
      padding: 1.25rem 1rem 1rem;
    }
    .article-cvr:after {
      transform: skewY(-2deg);
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
      transform: skewY(-1.5deg);
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
  {#if createdDate}
    <p class="artl-covr__byline">{createdDate}</p>
  {/if}
  {#if description}
    <hr />
    <p class="artl-covr__desc">{description}</p>
  {/if}
</section>

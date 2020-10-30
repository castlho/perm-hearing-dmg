<script>
  /** Article cover image */
  export let coverImage = ''

  /** Article created date */
  export let createdDate = ''

  /** Article title */
  export let title = ''
</script>

<style>
  .article-cvr {
    position: relative;
    color: var(--white);
  }
  .article-cvr:after {
    content: '';
    position: absolute;
    background-color: var(--navy);
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
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    .article-cvr:after {
      top: 1.5rem;
      bottom: -1.25rem;
      left: .5rem;
      right: -.75rem;
    }

    .article-cvr__img {
      width: calc(100% + 3.25rem);
      margin-left: -2.25rem;
      margin-bottom: 1.25rem;
    }
  }

  @media (min-width: 768px) {
    .article-cvr {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .article-cvr:after {
      top: 2.5rem;
      bottom: -1.5rem;
      left: .75rem;
      right: -1.5rem;
    }

    .article-cvr__img {
      width: calc(100% + 4.75rem);
      margin-left: -3.5rem;
      margin-bottom: 1.5rem;
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
  {#if createdDate}
    <p class="article-cvr__byline">{createdDate}</p>
  {/if}
</section>

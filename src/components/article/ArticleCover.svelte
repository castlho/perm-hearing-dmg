<script>
  import CoverImage from '../CoverImage.svelte'

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
    .article-cvr :global(.cover-img) {
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
    .article-cvr :global(.cover-img) {
      width: calc(100% + 4.75rem);
      margin-left: -3.5rem;
      margin-bottom: 1.5rem;
    }
  }
</style>

<section class="article-cvr">
  {#if coverImage}
    <CoverImage alt="{title}" src="{coverImage}" />
  {/if}
  <h1>{title}</h1>
  {#if createdDate}
    <p class="article-cvr__byline">{createdDate}</p>
  {/if}
</section>

<script>
  import CoverImage from '../CoverImage.svelte'
  import StackedCard from '../StackedCard.svelte'

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
    text-decoration: none;
  }
  .article-crd__byline {
    font-style: italic;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  @media (max-width: 767px) {
    .article-crd__byline {
      margin-top: .125rem;
      font-size: .875rem;
    }

    /** Click effect */
    .article-crd .crd.crd--stacked:active h2 {
      text-decoration-line: underline;
      text-decoration-style: double;
      text-decoration-color: var(--white);
    }
  }

  @media (min-width: 768px) {
    .article-crd__byline {
      margin-top: .25rem;
      font-size: 1rem;
    }

    /** Hover effect */
    .article-crd .crd.crd--stacked:hover h2 {
      text-decoration: underline;
      text-decoration-style: double;
      text-decoration-color: var(--white);
    }
  }
</style>

<a class="article-crd" rel="prefetch"
   href="blogs/{slugEncoded}" title="{title}">
  <StackedCard clickable>
    <div slot="cover" class="article-crd__cvr">
      <CoverImage loading="lazy" alt="{title}"
                  src="{coverImage}" />
    </div>
    <div slot="content" class="article-crd__content">
      <h2>{title}</h2>
      {#if byline}
        <p class="article-crd__byline">{byline}</p>
      {/if}
    </div>
  </StackedCard>
</a>

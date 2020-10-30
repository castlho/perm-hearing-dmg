<script>
  import CoverImage from '../CoverImage.svelte'

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
    bottom: 0;
    background-color: var(--navy);
    z-index: -1;
    transition: transform .3s ease;
  }

  .article-crd :global(.cover-img) {
    transition: transform .3s ease;
  }
  .article-crd__byline {
    font-style: italic;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  @media (max-width: 767px) {
    .article-crd {
      padding: 0 1.5rem 1rem;
    }
    .article-crd:after {
      top: 1.5rem;
      left: .5rem;
      right: -.5rem;
    }
    .article-crd :global(.cover-img) {
      width: calc(100% + 3rem);
      margin-left: -2rem;
      margin-bottom: 1rem;
    }
    .article-crd__byline {
      margin-top: .125rem;
      font-size: .875rem;
    }

    .article-crd:active:after {
      transform: translateX(-.5rem);
    }
    .article-crd:active :global(.cover-img) {
      transform: translateX(.5rem);
    }
  }

  @media (min-width: 768px) {
    .article-crd {
      padding: 0 2rem 1.25rem;
    }
    .article-crd:after {
      top: 2rem;
      left: .75rem;
      right: -.75rem;
    }
    .article-crd :global(.cover-img) {
      width: calc(100% + 4rem);
      margin-left: -2.75rem;
      margin-bottom: 1.25rem;
    }
    .article-crd__byline {
      margin-top: .25rem;
      font-size: 1rem;
    }

    .article-crd:hover:after {
      transform: translateX(-.75rem);
    }
    .article-crd:hover :global(.cover-img) {
      transform: translateX(.75rem);
    }
  }
</style>

<a class="article-crd" rel="prefetch"
   href="blogs/{slugEncoded}" title="{title}">
  {#if coverImage}
    <CoverImage alt="{title}" src="{coverImage}" />
  {/if}
  <h2>{title}</h2>
  {#if byline}
    <p class="article-crd__byline">{byline}</p>
  {/if}
</a>

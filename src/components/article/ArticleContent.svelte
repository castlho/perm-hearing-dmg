<script>
  import intersection from '../../actions/intersection'
  import scrollProgress from '../../stores/scrollProgress'

  /** Options for article scroll progress tracking */
  const scrollProgressTrackerOptions = [ 0.0, 0.2, 0.4, 0.6, 0.8, 1.0 ]
    .map(progress => ({
      detail: { progress },
      rootMargin: '-50% 0px -30% 0px',
    }))

  /** Scroll progress change event handler */
  const onScrollProgressChange = ({ detail = {} } = {}) => {
    // Set scroll progress to intersecting tracker
    if (Number.isFinite(detail.progress)) {
      scrollProgress.set(detail.progress)
    }
  }

  /** Article body content HTML */
  export let html = ''
</script>

<style>
  .article-cont {
    position: relative;
  }
  .article-cont__trckr {
    position: absolute;
    left: 0;
  }

  .article-cont :global(iframe) {
    display: block;
    max-width: 100%;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .article-cont :global(.article-embed.article-embed--ig iframe) {
    width: 100%;
    max-width: 500px;
  }

  @media (max-width: 767px) {
    .article-cont {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    .article-cont :global(p) {
      margin-top: 1.5rem;
    }
    .article-cont :global(iframe) {
      margin-top: 2rem !important;
      margin-bottom: 2rem !important;
    }
  }

  @media (min-width: 768px) {
    .article-cont {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .article-cont :global(p) {
      margin-top: 2rem;
    }
    .article-cont :global(iframe) {
      margin-top: 2.5rem !important;
      margin-bottom: 2.5rem !important;
    }
  }
</style>

<section class="article-cont">
  <!-- Article HTML content -->
  <div class="article-cont__html">{@html html}</div>
  <!-- Scroll progress trackers using Intersection Observer -->
  {#each scrollProgressTrackerOptions as option}
    <span use:intersection="{option}"
          on:intersect-start="{onScrollProgressChange}"
          class="article-cont__trckr trckr"
          style="top: {option.detail.progress * 100}%" />
  {/each}
</section>

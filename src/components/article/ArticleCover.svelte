<script>
  import CoverImage from '../CoverImage.svelte'
  import StackedCard from '../StackedCard.svelte'

  /** Article cover image */
  export let coverImage = ''

  /** Article created date */
  export let createdDate = ''

  /** Article title */
  export let title = ''
</script>

<style>
  .article-cvr__byline {
    font-style: italic;
  }
</style>

<section class="article-cvr">
  <StackedCard>
    <div slot="cover" class="article-cvr__img">
      <CoverImage alt="{title}" src="{coverImage}" />
    </div>
    <div slot="content" class="article-cvr__content">
      <h1>{title}</h1>
      {#if createdDate}
        <p class="article-cvr__byline">{createdDate}</p>
      {/if}
    </div>
  </StackedCard>
</section>

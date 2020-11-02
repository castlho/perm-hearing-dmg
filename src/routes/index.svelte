<script context="module">
  export async function preload () {
    const res = await this.fetch('blogs.json')
    const data = await res.json()
    if (res && data) {
      if (res.status === 200 && Array.isArray(data)) {
        return { articles: data }
      }
      this.error(res.status, data.message)
      return
    }

    this.error(500, 'Fetch data error')
  }
</script>

<script>
  import ArticleCard from '../components/article/ArticleCard.svelte'
  import { siteDescription } from '../libs/metadata'

  /**
   * List of articles
   * @type {Array}
   */
  export let articles
</script>

<style>
  .home__intro {
    color: var(--navy);
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    position: relative;
  }

  @media (max-width: 767px) {
    .home__intro {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      font-size: 1rem;
    }
    h3 {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    li:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 768px) {
    .home__intro {
      margin-bottom: 2rem;
      padding-left: 2rem;
      padding-right: 2rem;
      font-size: 1.125rem;
    }
    h3 {
      margin-bottom: 1.25rem;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    li:not(:last-child) {
      margin-bottom: 1.25rem;
    }
  }
</style>

<p class="home__intro">{siteDescription}</p>
<h3>最新偉論 //</h3>
<ul class="artl__items">
  {#each articles as { byline, coverImage, slug, title }}
    <li class="artl__item">
      <ArticleCard {byline} {coverImage}
                   {slug} {title} />
    </li>
  {/each}
</ul>

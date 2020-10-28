<script>
  /**
   * Article created date
   * @type {string}
   */
  export let createdDate = ''
  /**
   * Article description
   * @type {string}
   */
  export let description = ''
  /**
   * Article title
   * @type {string}
   */
  export let title = ''
</script>

<style>
  .artl-covr {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    color: #00338C;
  }
  .artl-covr:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #D3F0FF;
    z-index: -1;
  }
  .artl-covr__byline {
    font-style: italic;
    font-weight: 700;
  }

  @media (max-width: 767px) {
    .artl-covr {
      padding: 1.25rem 1rem 1rem;
    }
    .artl-covr:after {
      border-radius: .5rem;
      transform: skew(4deg, -1.5deg);
    }
    .artl-covr__byline {
      margin-top: .25rem;
    }
    hr {
      margin-top: .75rem;
      margin-bottom: .75rem;
    }
  }

  @media (min-width: 768px) {
    .artl-covr {
      padding: 1.75rem 2rem 1.5rem;
    }
    .artl-covr:after {
      border-radius: .75rem;
      transform: skew(4.5deg, -2deg);
    }
    .artl-covr__byline {
      margin-top: .5rem;
    }
    hr {
      margin-top: 1.25rem;
      margin-bottom: 1.25rem;
    }
  }
</style>

<section class="artl-covr">
  <h1>{title}</h1>
  {#if createdDate}
    <p class="artl-covr__byline">{createdDate}</p>
  {/if}
  {#if description}
    <hr />
    <p class="artl-covr__desc">{description}</p>
  {/if}
</section>

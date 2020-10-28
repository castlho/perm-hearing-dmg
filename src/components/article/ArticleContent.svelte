<script>
  /**
   * Article body content HTML
   * @type {*}
   */
  export let body
</script>

<style>
  .artl-cont :global(iframe) {
    display: block;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 767px) {
    .artl-cont {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    .artl-cont :global(p) {
      margin-top: 1.5rem;
    }
    .artl-cont :global(iframe) {
      margin-top: 2rem;
      margin-bottom: 2rem;
      border-radius: .5rem;
    }
  }

  @media (min-width: 768px) {
    .artl-cont {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .artl-cont :global(p) {
      margin-top: 2rem;
    }
    .artl-cont :global(iframe) {
      margin-top: 2.5rem;
      margin-bottom: 2.5rem;
      border-radius: .75rem;
    }
  }
</style>

<section class="artl-cont">
  {@html body}
</section>

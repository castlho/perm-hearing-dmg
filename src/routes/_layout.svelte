<script>
  import Footer from '../components/Footer.svelte'
  import Nav from '../components/Nav.svelte'
  import { siteTitle } from '../libs/metadata'

  export let segment
</script>

<style>
  .app {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 767px) {
    .app {
      max-width: 500px;
    }
    .app :global(.ftr) {
      margin-top: 4rem;
    }
    main {
      min-height: calc(100vh - 9rem);
    }
  }

  @media (min-width: 768px) {
    .app {
      max-width: 704px;
    }
    .app :global(.ftr) {
      margin-top: 5rem;
    }
    main {
      min-height: calc(100vh - 10rem);
    }
  }
</style>

<svelte:head>
  <title>{siteTitle}</title>
</svelte:head>

<div class="app">
  {#if segment}
    <Nav />
  {/if}
  <main>
    <slot />
  </main>
  <Footer />
</div>

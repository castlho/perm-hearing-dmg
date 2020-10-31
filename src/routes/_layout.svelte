<script>
  import { siteDescription, siteTitle } from '../libs/metadata'
  import Footer from '../components/Footer.svelte'
  import Header from '../components/Header.svelte'

  export let segment
</script>

<style>
  .app {
    width: 100%;
    background-color: var(--white);
    z-index: -1;
  }
  .app :global(.ftr) {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: -10;
  }

  @media (min-width: 500px) and (max-width: 767px) {
    .app {
      padding-left: calc(50vw - 250px);
      padding-right: calc(50vw - 250px);
    }
  }

  @media (max-width: 767px) {
    .app {
      margin-bottom: 149px;
      padding-bottom: 4rem;
    }
  }

  @media (min-width: 768px) {
    .app {
      margin-bottom: 153px;
      padding-bottom: 5rem;
      padding-left: calc(50vw - 352px);
      padding-right: calc(50vw - 352px);
    }
  }
</style>

<svelte:head>
  <title>{siteTitle}</title>
  <meta content="{siteTitle}" property="og:title" />
  <meta content="{siteTitle}" name="twitter:title" />

  <meta content="{siteDescription}" name="description" />
  <meta content="{siteDescription}" property="og:description" />
  <meta content="{siteDescription}" name="twitter:description" />
</svelte:head>

<div class="app">
  <Header showIntro="{!segment}" />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<script>
  import { siteDescription, siteTitle } from '../libs/metadata'
  import Footer from '../components/Footer.svelte'
  import Header from '../components/header/Header.svelte'
  import intersection from '../actions/intersection'
  import scrollProgress from '../stores/scrollProgress'

  /** Page segment */
  export let segment = ''

  /** Scroll top tracker option */
  const scrollTopTrackerOption = {
    rootMargin: '0px 0px -80% 0px',
  }

  /** Scroll top event listener */
  const onScrollTop = () => {
    // Set scroll progress to 0%
    scrollProgress.set(0.0)
  }
</script>

<style>
  .page {
    width: 100%;
    background-color: var(--white);
    pointer-events: auto;
    z-index: -1;
  }
  .page :global(.ftr) {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: -10;
  }

  @media (min-width: 500px) and (max-width: 767px) {
    .page {
      padding-left: calc(50vw - 250px);
      padding-right: calc(50vw - 250px);
    }
  }

  @media (max-width: 767px) {
    .page {
      margin-bottom: 149px;
      padding-bottom: 4rem;
    }
    .page :global(.hdr) {
      margin-bottom: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    .page {
      margin-bottom: 153px;
      padding-bottom: 5rem;
      padding-left: calc(50vw - 352px);
      padding-right: calc(50vw - 352px);
    }
    .page :global(.hdr) {
      margin-bottom: 2rem;
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

<div class="page">
  <!-- Scroll top tracker -->
  <span use:intersection="{scrollTopTrackerOption}"
        on:intersect-start="{onScrollTop}"
        class="trckr" />
  <!-- Page header -->
  <Header showLink="{!!segment}" />
  <!-- Page content -->
  <main>
    <slot />
  </main>
  <!-- Page footer -->
  <Footer />
</div>

<script>
  import { siteDescription, siteTitle } from '../libs/metadata'

  /** Whether to show intro section */
  export let showIntro = false
</script>

<style>
  .hdr__masthead {
    display: block;
    font-style: italic;
    color: var(--navy);
  }
  .hdr__intro {
    margin-top: -.5rem;
    color: var(--navy);
  }

  @media (max-width: 767px) {
    .hdr {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    .hdr__masthead {
      margin-top: 1.25rem;
      margin-bottom: 1.25rem;
    }
    .hdr__intro {
      margin-bottom: 2rem;
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    .hdr {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .hdr__masthead {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .hdr__intro {
      margin-bottom: 2.5rem;
      font-size: 1.125rem;
    }
  }
</style>

<header class="hdr">
  {#if showIntro}
    <h1 class="hdr__masthead">{siteTitle}</h1>
    <p class="hdr__intro">{siteDescription}</p>
  {:else}
    <a class="hdr__masthead" href="/"
       rel="prefetch">
      <h2>{siteTitle}</h2>
    </a>
  {/if}
</header>

<script>
  import HeaderMasthead from './HeaderMasthead.svelte'
  import { siteTitle } from '../../libs/metadata'

  /** Whether to display link */
  export let showLink = false
</script>

<style>
  .hdr :global(.hdr-masthead) {
    position: fixed;
    top: 0;
    z-index: 30;
  }
  .hdr__title {
    display: flex;
    align-items: center;
    width: 100%;
    font-style: italic;
    color: var(--navy);
  }

  @media (max-width: 767px) {
    .hdr {
      padding-left: .5rem;
    }
    .hdr :global(.hdr-masthead) {
      width: 80px;
    }
    .hdr__title {
      min-height: 100px;
      padding-left: calc(80px + 1rem);
      padding-right: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    .hdr {
      padding-left: .75rem;
    }
    .hdr :global(.hdr-masthead) {
      width: 100px;
      height: 125px;
    }
    .hdr__title {
      min-height: 125px;
      padding-left: calc(100px + 1.25rem);
      padding-right: 2rem;
    }
  }
</style>

<header class="hdr">
  <!-- Masthead -->
  <HeaderMasthead {showLink} />

  <!-- Title -->
  {#if !showLink}
    <h1 class="hdr__title">{siteTitle}</h1>
  {:else}
    <a class="hdr__title" href="/"
       rel="prefetch" title="{siteTitle}">
      <h2>{siteTitle}</h2>
    </a>
  {/if}
</header>

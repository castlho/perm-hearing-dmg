<script>
  import { siteTitle } from '../libs/metadata'

  /**
   * Current year
   * @type {number}
   */
  const year = new Date().getFullYear()
</script>

<style>
  .ftr {
    position: relative;
  }
  .ftr:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--grey);
    z-index: -1;
  }

  @media (max-width: 767px) {
    .ftr {
      padding: 1.5rem 1.5rem 2rem;
    }
    .ftr:after {
      //transform: var(--skew-mobile);
    }
  }

  @media (min-width: 768px) {
    .ftr {
      padding: 2rem 2rem 3rem;
    }
    .ftr:after {
      //transform: var(--skew-desktop);
    }
  }
</style>

<footer class="ftr">
  <p>@ {year} {siteTitle}</p>
  <p>Developed with <a href="https://svelte.dev/"
                       rel="external"
                       target="_blank">Svelte</a> + <a href="https://sapper.svelte.dev/"
                                                       rel="external"
                                                       target="_blank">Sapper</a></p>
</footer>
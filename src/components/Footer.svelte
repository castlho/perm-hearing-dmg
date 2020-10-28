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
    background-color: #D5D9DA;
    z-index: -1;
  }

  @media (max-width: 767px) {
    .ftr {
      padding: 1rem;
    }
    .ftr:after {
      border-radius: .5rem;
      transform: skew(-1.5deg, 1deg);
    }
  }

  @media (min-width: 768px) {
    .ftr {
      padding: 1.5rem 2rem;
    }
    .ftr:after {
      border-radius: .75rem;
      transform: skew(-2deg, 1deg);
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
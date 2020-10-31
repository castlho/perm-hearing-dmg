<script>
  import { siteDescription, siteTitle } from '../libs/metadata'

  /**
   * Current year
   * @type {number}
   */
  const year = new Date().getFullYear()
</script>

<style>
  .ftr {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    background-color: var(--grey);
  }
  .ftr hr {
    border-top-width: 1px;
    border-top-color: var(--black);
  }

  @media (max-width: 499px) {
    .ftr {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  @media (min-width: 500px) and (max-width: 767px) {
    .ftr {
      padding-left: calc(50vw - 250px + 1.5rem);
      padding-right: calc(50vw - 250px + 1.5rem);
    }
  }

  @media (max-width: 767px) {
    .ftr {
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
    }
    .ftr p {
      font-size: .875rem;
    }
    .ftr hr {
      margin-top: .75rem;
      margin-bottom: .75rem;
    }
  }

  @media (min-width: 768px) {
    .ftr {
      padding: 1.5rem calc(50vw - 352px + 2rem);
    }
    .ftr p {
      font-size: 1rem;
    }
    .ftr hr {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
</style>

<footer class="ftr">
  <p>{siteDescription}</p>
  <hr />
  <p>@ {year} {siteTitle}</p>
  <p>Developed with <a href="https://svelte.dev/"
                       rel="external"
                       target="_blank">Svelte</a> + <a href="https://sapper.svelte.dev/"
                                                       rel="external"
                                                       target="_blank">Sapper</a></p>
</footer>
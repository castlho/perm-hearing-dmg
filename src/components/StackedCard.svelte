<script>
  /** Whether card is clickable */
  export let clickable = false
</script>

<style>
  .crd.crd--stacked {
    position: relative;
    color: var(--white);
    z-index: 0;
  }
  .crd.crd--stacked:after {
    content: '';
    position: absolute;
    bottom: 0;
    background-color: var(--navy);
    z-index: -1;
    transition: transform .3s ease;
  }
  .crd.crd--stacked :global([slot="cover"]) {
    transition: transform .3s ease;
  }

  @media (max-width: 767px) {
    .crd.crd--stacked {
      padding: 0 1.5rem 1rem;
    }
    .crd.crd--stacked:after {
      top: 1.5rem;
      left: .5rem;
      right: -.5rem
    }
    .crd.crd--stacked :global([slot="cover"]) {
      width: calc(100% + 3rem);
      margin-bottom: 1rem;
      margin-left: -2rem;
    }

    /** Click effect */
    .crd.crd--stacked.crd--clickable:active:after {
      transform: translate(-.5rem, .25rem);
    }
    .crd.crd--stacked.crd--clickable:active :global([slot="cover"]) {
      transform: translate(.5rem, -.25rem);
    }
  }

  @media (min-width: 768px) {
    .crd.crd--stacked {
      padding-bottom: 1.25rem;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .crd.crd--stacked:after {
      top: 2rem;
      left: .75rem;
      right: -.75rem;
    }
    .crd.crd--stacked :global([slot="cover"]) {
      width: calc(100% + 4rem);
      margin-bottom: 1.25rem;
      margin-left: -2.75rem;
    }

    /** Hover effect */
    .crd.crd--stacked.crd--clickable:hover:after {
      transform: translate(-.75rem, .25rem);
    }
    .crd.crd--stacked.crd--clickable:hover :global([slot="cover"]) {
      transform: translate(.75rem, -.25rem);
    }
  }
</style>

<div class="crd crd--stacked"
     class:crd--clickable="{clickable}">
  <slot name="cover" />
  <slot name="content" />
</div>

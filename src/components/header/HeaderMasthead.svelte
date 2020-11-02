<script>
  import scrollProgress from '../../stores/scrollProgress'
  import { siteTitle } from '../../libs/metadata'

  /** Scroll progress store */
  let progress = 0
  scrollProgress.subscribe(p => progress = p)

  /** Whether to display link */
  export let showLink = false
</script>

<style>
  .hdr-masthead {
    position: relative;
  }
  .hdr-masthead__spacer {
    display: block;
    width: 100%;
    padding-top: 125%;
    pointer-events: none;
  }

  /** Site logo */
  .hdr-masthead__logo {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--navy);
  }
  .hdr-masthead__link {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    z-index: 1;
  }

  /** Progress indicators */
  .hdr-masthead__progs {
    position: absolute;
    bottom: 0;
    left: 107.5%;
    width: 40%;
    height: 72%;
    padding-bottom: 6%;
  }
  .hdr-masthead__prog {
    width: 100%;
    height: 24.242424%;
    margin-top: 20%;
  }
  .hdr-masthead__prog span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 9999px;
    background-color: var(--blue);
    transition: opacity .3s ease, transform .3s ease;
  }
  .hdr-masthead__prog.hdr-masthead__prog--1 {
    transform: rotate(5deg) translateX(.25rem);
  }
  .hdr-masthead__prog.hdr-masthead__prog--2 {
    transform: rotate(-20deg);
  }
  .hdr-masthead__prog.hdr-masthead__prog--3 {
    transform: rotate(30deg);
  }

  /** Hidden progress indicators */
  .hdr-masthead__prog:not(.hdr-masthead__prog--show) span {
    opacity: 0;
    transform: scale(.8) translateX(50%);
  }
</style>

<section class="hdr-masthead">
  <span class="hdr-masthead__spacer" />
  <div class="hdr-masthead__logo">
    {#if showLink}
      <a class="hdr-masthead__link" href="/"
         rel="prefetch" title="{siteTitle}">{siteTitle}</a>
    {/if}
  </div>
  <div class="hdr-masthead__progs">
    <div class="hdr-masthead__prog hdr-masthead__prog--2"
         class:hdr-masthead__prog--show="{progress >= 0.56}">
      <span />
    </div>
    <div class="hdr-masthead__prog hdr-masthead__prog--1"
         class:hdr-masthead__prog--show="{progress >= 0.28}">
      <span />
    </div>
    <div class="hdr-masthead__prog hdr-masthead__prog--3"
         class:hdr-masthead__prog--show="{progress >= 0.84}">
      <span />
    </div>
  </div>
</section>

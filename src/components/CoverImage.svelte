<script>
  /** Image alternative text */
  export let alt = ''

  /** Image height */
  export let height = 628

  /** Image loading mode */
  export let loading = undefined

  /** Image source URL */
  export let src = ''

  /** Image width */
  export let width = 1200

  /** Image height spacer percent */
  $: spacerPercent = `${height / width * 100}%`
</script>

<style>
  .cover-img {
    position: relative;
  }
  .cover-img__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
  .cover-img__spacer {
    display: block;
    width: 100%;
    pointer-events: none;
  }
</style>

<figure class="cover-img">
  <img class="cover-img__img"
       {alt} {height} {loading} {src}
       title="{alt}" {width}>
  <span class="cover-img__spacer"
        style="padding-top: {spacerPercent}" />
</figure>

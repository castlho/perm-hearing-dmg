<script>
  import { siteTitle } from '../libs/metadata'
</script>

<style>
  nav {
    display: flex;
    align-items: center;
  }
  h2 {
    font-style: italic;
    color: var(--navy);
  }

  @media (max-width: 767px) {
    nav {
      padding: 1.25rem 1.5rem;
    }
  }

  @media (min-width: 768px) {
    nav {
      padding: 1.75rem 2rem;
    }
  }
</style>

<nav class="nav">
  <a class="nav__masthead" href="/"
     rel="prefetch">
    <h2>{siteTitle}</h2>
  </a>
  <!--	<ul class="nav__items">-->
  <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
       the blog data when we hover over the link or tap it on a touchscreen -->
  <!--		<li><a href="/blog" rel="prefetch"-->
  <!--					 aria-current="{segment === 'blog' ? 'page' : undefined}">blog</a></li>-->
  <!--	</ul>-->
</nav>

<script context="module">
	export async function preload () {
		const res = await this.fetch('blogs.json')
		const data = await res.json()
		if (res && data) {
			if (res.status === 200 && Array.isArray(data)) {
				return { articles: data }
			}
			this.error(res.status, data.message)
			return
		}

		this.error(500, 'Fetch data error')
	}
</script>

<script>
	import ArticleCard from '../components/article/ArticleCard.svelte'
	import { siteTitle } from '../libs/metadata'

	/**
	 * List of articles
	 * @type {Array}
	 */
	export let articles
</script>

<style>
	h1 {
		font-style: italic;
		line-height: 1.25;
		color: #00338C;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		position: relative;
	}

	@media (max-width: 767px) {
		h1 {
			padding: 2rem 1.5rem;
		}
		h3 {
			margin-bottom: 1rem;
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
		li {
			padding-left: .5rem;
			padding-right: .5rem;
		}
		li:not(:last-child) {
			margin-bottom: 1.25rem;
		}
	}

	@media (min-width: 768px) {
		h1 {
			padding: 2.5rem 2rem;
		}
		h3 {
			margin-bottom: 1.25rem;
			padding-left: 2rem;
			padding-right: 2rem;
		}
		li:not(:last-child) {
			margin-bottom: 1.75rem;
		}
	}
</style>

<h1>{siteTitle}</h1>
<h3>最新偉論</h3>
<ul class="artl__items">
	{#each articles as article}
		<li class="artl__item">
			<ArticleCard {article} />
		</li>
	{/each}
</ul>

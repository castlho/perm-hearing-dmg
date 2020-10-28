<script context="module">
  /**
   * Preload article data
   * @param params
   * @returns {Promise}
   */
	export async function preload ({ params }) {
		const res = await this.fetch(`blogs/${params.slug}.json`)
		const data = await res.json()
		if (res && data) {
			if (res.status === 200) {
				return { article: data }
			}
			this.error(res.status, data.message)
			return
		}

		this.error(500, 'Fetch data error')
	}
</script>

<script>
	import Article from '../../components/article/Article.svelte'

	/**
	 * Article data
	 */
	export let article
</script>

<Article article="{article}" />

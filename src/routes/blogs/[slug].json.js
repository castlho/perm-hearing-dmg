import articles from './_articles'

/**
 * Blog articles lookup map
 * @type {Map<string, *>}
 */
const articlesLookup = new Map()
articles.forEach((article) => {
	articlesLookup.set(article.slug, JSON.stringify(article))
})

/**
 * Blog article endpoint GET handler
 */
export function get (req, res) {
	const { slug } = req.params
	const headers = {
		'Content-Type': 'application/json',
	}

	if (articlesLookup.has(slug)) {
		res.writeHead(200, headers)
		res.end(articlesLookup.get(slug))
	} else {
		res.writeHead(404, headers)
		res.end(JSON.stringify({
			message: 'Not found',
		}))
	}
}

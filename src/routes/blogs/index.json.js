import _pick from 'lodash/pick'
import articles from './_articles'

/**
 * Formatted summaries of blog articles
 * @type {string}
 */
const articleSummaries = JSON.stringify(articles
  .map(article => _pick(article, [
    'coverImage',
    'createdDate',
    'description',
    'slug',
    'title',
  ])))

/**
 * Blog article summaries GET handler
 */
export function get (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })
  res.end(articleSummaries)
}

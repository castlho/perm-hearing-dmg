import _pick from 'lodash/pick'
import articles from './_articles'
import { formatDate } from '../../libs/datetime'

/**
 * Formatted summaries of blog articles
 * @type {string}
 */
const articleSummaries = JSON.stringify(articles
  .map(article => ({
    ..._pick(article, [ 'description', 'slug', 'title' ]),
    createdDate: formatDate(new Date(article.createdAt)),
  })))

/**
 * Blog article summaries GET handler
 */
export function get (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })
  res.end(articleSummaries)
}

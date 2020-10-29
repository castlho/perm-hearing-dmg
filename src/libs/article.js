import _pick from 'lodash/pick'
import { formatDate } from './datetime'

/**
 * Check whether article data is valid
 * @returns {boolean}
 */
export function isArticleValid (article) {
  return !!(article && article.filename && article.html &&
    article.metadata && article.metadata.title)
}

/**
 * Format article data
 */
export function formatArticleData
  ({ html = '', filename = '', metadata = {} } = {}) {
  return {
    ..._pick(metadata, [
      'coverImage',
      'createdAt',
      'description',
      'title',
    ]),
    createdDate: formatDate(new Date(metadata.createdAt)),
    html,
    slug: filename.replace(/\.md/g, ''),
  }
}

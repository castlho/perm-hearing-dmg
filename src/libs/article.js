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
 * Format article byline
 * @param {string} createdDate
 * @param {string} description
 * @returns {string}
 */
export function formatArticleByline (createdDate = '', description = '') {
  let byline = createdDate
  if (description) {
    byline += `${byline && description ? ' // ' : ''}${description}`
  }
  return byline
}

/**
 * Format article data
 */
export function formatArticleData
  ({ html = '', filename = '', metadata = {} } = {}) {
  const createdDate = formatDate(new Date(metadata.createdAt))
  return {
    ..._pick(metadata, [
      'coverImage',
      'createdAt',
      'description',
      'title',
    ]),
    byline: formatArticleByline(createdDate, metadata.description),
    createdDate,
    html,
    slug: filename.replace(/\.md/g, ''),
  }
}

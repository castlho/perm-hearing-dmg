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
    createdAt: metadata.createdAt || '',
    createdDate: formatDate(new Date(metadata.createdAt)),
    description: metadata.description || '',
    html,
    slug: filename.replace(/\.md/g, ''),
    title: metadata.title,
  }
}

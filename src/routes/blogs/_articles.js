import { isArticleValid, formatArticleData } from '../../libs/article'
import _sortBy from 'lodash/sortBy'
import blogs from '../../../articles/blogs/*.md'

// Format blog articles data
const blogArticles = _sortBy(
  blogs
    .filter(isArticleValid)
    .map(formatArticleData),
  'createdAt')
  .reverse()

/**
 * List of blog articles
 */
export default blogArticles

import _format from 'date-fns/format'
import _isValid from 'date-fns/isValid'

/**
 * Format Date instance into string
 * @param {Date} date
 * @return {string}
 */
export function formatDate (date) {
  if (_isValid(date)) {
    return _format(date, 'd MMM yyyy')
  }
  return ''
}

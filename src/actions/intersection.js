/**
 * Action for listening to
 * intersection-related events,
 * using Intersection Observer
 * @param {HTMLElement} node
 * @param {*} options
 */
export default function (node,
  { detail = {}, rootMargin = '0px 0px 0px 0px', threshold = 1 } = {}) {
  // Create callback to handle intersection change
  let isIntersecting = false
  const callback = ([ entry ] = []) => {
    if (entry) {
      // If intersection starts, emit start event
      if (entry.isIntersecting && !isIntersecting) {
        isIntersecting = true
        node.dispatchEvent(new CustomEvent('intersect-start', { detail }))
      }

      // If intersection ends, emit end event
      if (!entry.isIntersecting && isIntersecting) {
        isIntersecting = false
        node.dispatchEvent(new CustomEvent('intersect-end', { detail }))
      }
    }
  }

  // Create new Intersection Observer instance
  const observer = new IntersectionObserver(callback,
    { rootMargin, threshold })

  // Register element to observer
  observer.observe(node)

  return {
    // On component destruction,
    // unregister element from observer
    destroy () {
      if (observer instanceof IntersectionObserver) {
        observer.unobserve(node)
      }
    }
  }
}

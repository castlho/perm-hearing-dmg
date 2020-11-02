import { writable } from 'svelte/store'

const { subscribe, set } = writable(0.0)

/**
 * Store for scroll progress
 */
export default {
  /**
   * Set scroll progress value
   * @param {number} progress [0.0 - 1.0]
   */
  set (progress) {
    if (Number.isFinite(progress) &&
      progress >= 0.0 && progress <= 1.0) {
      set(progress)
    }
  },

  /**
   * Subscribe to scroll progress value change
   */
  subscribe,
}

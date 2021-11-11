import { placeholder } from './utils.js'
/**
 * Listen
 * @param {string} eventName - Event to listen on
 * @param {HTMLElement} element
 * @returns {observable}
 */
export const listen = placeholder((eventName, element) => {
  return new Observable(observer => {
    const handler = event => observer.next(event)
    element.addEventListener(eventName, handler, true)
    return () => element.removeEventListener(eventName, handler, true)
  })
})

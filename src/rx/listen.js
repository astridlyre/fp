import { curry } from '../combinators.js'
/**
 * Listen
 * @param {string} eventName - Event to listen on
 * @param {HTMLElement} element
 * @returns {observable}
 */
export const listen = curry((eventName, element) => {
  return new Observable(observer => {
    const handler = event => observer.next(event)
    element.addEventListener(eventName, handler, true)
    return () => element.removeEventListener(eventName, handler, true)
  })
})

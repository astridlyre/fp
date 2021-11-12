import { placeholder } from './utils'
import { Observable, Observer } from '../Observable'

/**
 * Listen
 * @param {string} eventName - Event to listen on
 * @param {HTMLElement} element
 * @returns {observable}
 */
export const listen = placeholder((eventName: string, element: any) => {
  return new Observable((observer: Observer) => {
    const handler = (event: any) => observer.next(event)
    element.addEventListener(eventName, handler, true)
    return () => element.removeEventListener(eventName, handler, true)
  })
})

const urlAlphabet = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'

/**
 * Non-cryptographically secure nanoid function
 */
export function nanoid(size = 21) {
  let id = ''
  while (size--) id += urlAlphabet[(Math.random() * 64) | 0]
  return id
}

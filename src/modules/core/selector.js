import { adopt } from '../../utils/adopter.js'
import { globals } from '../../utils/window.js'
import { map } from '../../utils/utils.js'
import { registerMethods } from '../../utils/methods.js'
import List from '../../types/List.js'

export default function baseFind (query, parent) {
  return new List(map((parent || globals.document).querySelectorAll(query), function (node) {
    return adopt(node)
  }))
}

// Scoped find method
export function find (query) {
  return baseFind(query, this.node)
}

registerMethods('Dom', { find })

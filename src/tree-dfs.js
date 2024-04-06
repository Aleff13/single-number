/**
 * Visit all leaves of a generic tree and execute a callback
 * @param {*} node 
 * @param {*} callback 
 */
function visitLeaves (node, callback) {
    callback(node)

    if (node.children) {
        for (let child of node.children) {
            visitLeaves(child, callback)
        }
      }
}

module.exports = visitLeaves;
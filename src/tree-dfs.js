/**
 * Visit all nodes of a generic tree and execute a callback
 * @param {*} node 
 * @param {*} callback 
 */
function traverseNodes (node, callback) {
    callback(node)

    if (node.children) {
        for (let child of node.children) {
            traverseNodes(child, callback)
        }
      }
}

module.exports = traverseNodes;
/**
 * Return the first single value of an array
 * @param {*} arr 
 * @returns 
 */
function getSingleElement(arr) {
    const table = {}

    arr.forEach((value) => {
        const key = value.toString()

        const tableElement = table[key]

        if (table[key] === undefined) {
            table[key] = 0
            return
        }

        table[key] = tableElement+1
    })

    const indexOfSingleElement = Object.values(table).findIndex(v => v === 0)
    const element = Object.keys(table)[indexOfSingleElement]

    return element
}

module.exports = getSingleElement;
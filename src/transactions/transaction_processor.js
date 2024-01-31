// var txr = [];

function processTransactions(transActions) {
    let txr = []

    if (!validateTransactions(transActions)) {
        throw new Error('Undefined collection of transactions')
    }

    if (!transActions.length) return txr

    if (!transActions.length === 1) return [`${transActions[0]} 1`]

    // let txCount = {}
    let txCount = []

    const numberOfTransactions = transActions.length

    // for (var i = 0; i < numberOfTransactions; i++) {
    //     const transaction = transActions[i]
    //     txCount[transaction]
    //         ? (txCount[transaction] += 1)
    //         : (txCount[transaction] = 1)
    // }

    transActions.forEach((item) => {
        const index = txCount.findIndex((x) => x.name === item)
        index > -1
            ? txCount[index].quantity++
            : (txCount = [...txCount, { name: item, quantity: 1 }])
    })

    console.log(txCount)
    // txCount = sortByAmountThenName(txCount)
    txCount.sort()

    txCount.sort((itemOne, itemtwo) => {
        return compareFn(itemOne, itemtwo)
    })

    // // Place them back in array for returning
    // Object.keys(txCount).forEach(function (key, index) {
    //     txr[index] = `${key} ${txCount[key]}`
    // })

    txr = txCount.map((cartItem) => `${cartItem.name} ${cartItem.quantity}`)
    console.log(txr)
    return txr
}

// function sortByAmountThenName(txCount) {
//     // let sortedKeys = Object.keys(txCount).sort(function sortingFunction(
//     //     itemOne,
//     //     itemTwo
//     // ) {

//     // })

//     let sortedResults = {}
//     for (let objectKey of sortedKeys) {
//         sortedResults[objectKey] = txCount[objectKey]
//     }

//     return sortedResults
// }

function compareFn(itemOne, itemTwo, field) {
    // return
    // itemOne['quantity'] - itemTwo['quantity'] ||
    //     itemOne['name'] > itemTwo['name'] ||
    //     -(itemOne['name'] < itemTwo['name'])

    return
    itemOne.quantity - itemTwo.quantity
}

function validateTransactions(transactions) {
    // if (transactions === undefined) {
    //     return false
    // }

    // return true
    const result = transactions ? true : false
    return result
}

module.exports = processTransactions

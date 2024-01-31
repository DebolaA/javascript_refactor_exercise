function processTransactions(transActions) {
    let txr = []

    if (!validateTransactions(transActions)) {
        throw new Error('Undefined collection of transactions')
    }

    let txCount = []

    transActions.forEach((item) => {
        const index = txCount.findIndex((x) => x.name === item)
        index > -1
            ? txCount[index].quantity++
            : (txCount = [...txCount, { name: item, quantity: 1 }])
    })

    txCount.sort(compareFn)

    txr = txCount.map((cartItem) => `${cartItem.name} ${cartItem.quantity}`)
    return txr
}

function compareFn(itemOne, itemTwo) {
    return (
        itemTwo.quantity - itemOne.quantity ||
        itemOne.name > itemTwo.name ||
        -(itemOne.name < itemTwo.name)
    )
}

function validateTransactions(transactions) {
    return (result = transactions ? true : false)
}

module.exports = processTransactions

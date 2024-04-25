function lowestPrices(arr) {
    const catalog = {};
    for (const string of arr) {
        const [town, product, priceString] = string.split(' | ');
        const price = Number(priceString);
        if (!catalog[product]) {
            catalog[product] = { townName: town, price };
        }
        else if (catalog[product].price > price) {
            catalog[product] = { townName: town, price };
        }
    }
    for (const [productName, productData] of Object.entries(catalog)) {
        console.log(`${productName} -> ${productData.price} (${productData.townName})`);
    }
}
lowestPrices([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);

function lowestPrice(arr) {
    const productsArr = [];
    arr.map((productInfo) => {
        const [townName, productName, priceString] = productInfo.split(' | ');
        const price = Number(priceString);
        const existing = productsArr.find((product) => product.name === productName);
        if (existing) {
            if (existing.lowestPrice > price) {
                existing.lowestPrice = price;
                existing.town = townName;
            }
        }
        else {
            productsArr.push({ name: productName, town: townName, lowestPrice: price });
        }
    });
    productsArr.map((product) => console.log(`${product.name} -> ${product.lowestPrice} (${product.town})`));
}
lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);

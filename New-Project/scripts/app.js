let products =[]
console.log(products)
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(res => products.push(res.json()))



const $baseUrl = `https://dummyjson.com`

const getData = async(url) => {
    const response = await fetch(url)
    return await response.json()
}


const showProducts = () => {
    getData(`${baseUrl}/products`)
    .then((products) =>  {
        
        const productsRow = _getById('product-row')
        console.log(productsRow)
        const product = {
            id: products.id,
            title: products.title,
            brand: products.brand,
            description: products.description,
            rating: products.rating,
            category: products.category,
            price: products.price,
            discountPercentage: products.discountPercentage,
        }
        console.log(product)
    })
    
}

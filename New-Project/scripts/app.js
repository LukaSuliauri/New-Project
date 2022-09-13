const baseUrl = `https://dummyjson.com`

const getData = async(url) => {
    const response = await fetch(url)
    return await response.json()
}

window.addEventListener('DOMContentLoaded', async () => {
    const productsData = await getData(`${baseUrl}/products`)
    _render(_getById('product-row') , productsData.products.map( product => $product(product)).join('') )
})

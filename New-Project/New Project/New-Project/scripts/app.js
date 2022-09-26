const baseUrl = `https://dummyjson.com`

const getData = async(url) => {
    const response = await fetch(url)
    return await response.json()
}

window.addEventListener('DOMContentLoaded', async () => {
    
    const productsData = await getData(`${baseUrl}/products`)
    _render(_getById('product-row') , productsData.products.map( product => $product(product)).join('') )


    _getById('search-btn').addEventListener('click', async () =>{
        const search = _getById('search-box').value.trim()
        const sortedProducts = await getData(`${baseUrl}/products/search?q=${search}`)
        _render(_getById('product-row') , sortedProducts.products.map( product => $product(product)).join('') )
    })

    
})


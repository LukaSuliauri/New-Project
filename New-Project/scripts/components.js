const $product = (_) => { 
    const {id, thumbnail, title, brand, description, rating, category, price, discountPercentage} = _
    return `<div class="col-md-4 my-5">
                <div class="product-card" id="${id}">
                     <div class="card" style="width: 18rem;">
                        <img src="${thumbnail}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="product-title">${title}</h5>
                                <p class="product-brand">${brand}</p>
                                <p class="product-description">${description}</p>
                                <p class="product-rating"><i class="fa-solid fa-star">${rating}</i></p>
            
                                <div class="card-body-overlay">
                                    <p class="product-category">Category:${category}</p>
                                    <p class="product-price">Price:${price}</p>
                                    <p class="product-discaunt">Discount Percentage: ${discountPercentage}</p>  
                                    <a href="#" class="btn btn-primary">Buy Now</a>
                                </div>
                            </div>
                    </div>
                </div>  
            </div>`
}

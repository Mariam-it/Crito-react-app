import React from 'react'
import ProductList from '../ProductList/ProductList';

function NewsArticles() {
    return (
        <div>
            {/* <!-- Article start --> */}
            <div className="article">
                <div className="container">
                    <div className="header">
                        <div className="heading">
                            <div className="title">Our News & Articles</div>
                        </div>
                    </div>
                    <ProductList/>
                </div>
            </div>

        </div>
    )
}

export default NewsArticles
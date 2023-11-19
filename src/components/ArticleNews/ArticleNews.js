import React from 'react';
import './ArticleNews.css';
import ProductDetails from '../ProductDetails/ProductDetails';

function ArticleNews() {
    return (
        <div>
            {/* <!--Article-details start --> */}
            <div className="article-details">
                <ProductDetails />
            </div>
            {/* <!--Article-details end --> */}
        </div>
    )
}

export default ArticleNews
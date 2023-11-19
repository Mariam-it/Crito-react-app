import './Article.css';
import React from 'react'
import ProductList from '../ProductList/ProductList';
function Article() {

  return (
    <div>
         {/* <!-- Article start --> */}
      <div className="article">
        <div className="container">
            <div className="header">
                <div className="heading">
                    <span>Aricle & News</span>
                    <div className="title">Get Every Single Aticle & News</div>
                </div>
                <div className="btn">Browse Article<i className="fa-solid fa-arrow-up-right-from-square"></i></div>
            </div>
            <div className='carosell-items'>
            <ProductList/>
            <ProductList/>
            </div>
        </div>
        <div className="current">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
      </div>
      {/* <!-- Article end --> */}
    </div>
  )
}

export default Article



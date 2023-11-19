import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext'

const ProductDetails = () => {
    const { id } = useParams();
    const { product, getProduct, clearProduct } = useProducts()
    useEffect(() => {
        getProduct(id)
        return ()=> clearProduct()
    }, [])
    return (
        <>
            {product ? (
                <div className="container">
                    <div className="content">
                        <div className="title">{product.title}</div>
                        <div className="details">
                            <div className="date">{product.published}</div>
                            <div className="light"></div>
                            <div className="category">{product.category}</div>
                            <div className="light"></div>
                            <div className="author">{product.author}</div>
                        </div>
                    </div>
                    <div className="article">
                        <div className="article-content">
                            <img src={product.imageUrl} alt="" />
                            <div className="text">
                                <p>{product.content}</p>
                                <div className="citat">
                                    <p className="bold"><i className="fa-solid fa-quote-right fa-flip-horizontal"></i>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat tempora officiis sequi quasi corrupti odio minima sunt itaque pariatur animi quod, asperiores earum corporis, numquam maiores. Quia.</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias harum, facilis sunt iure dolorum assumenda dicta voluptatum, modi voluptas ipsum magnam placeat numquam neque. Sunt ducimus dolorum sit perferendis deleniti?</p>
                            </div>
                            <div className="tags">
                                <div className="tag"><a href="">Digitalization</a></div>
                                <div className="tag"><a href="">School</a></div>
                                <div className="tag"><a href="">IT</a></div>
                                <div className="tag"><a href="">Design</a></div>
                                <div className="tag"><a href="">Work</a></div>
                                <div className="tag"><a href="">Tech</a></div>
                            </div>
                        </div>
                        <div className="find-posts">
                            <div className="search">
                                <input type="text" placeholder="Type to search" />
                                <div className="icon">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                            <div className="recent">
                                <div className="header-title">Recent Posts</div>
                                <div className="posts">
                                    <div className="item">
                                        <div className="title">How To Blow Through Capital At An Incredible Rate</div>
                                        <div className="date">Jan 14, 2020</div>
                                    </div>
                                    <div className="item">
                                        <div className="title">Design Studios That Everyone Should Know About? </div>
                                        <div className="date">Jan 14, 2020</div>
                                    </div>
                                    <div className="item">
                                        <div className="title">Design Studios That Everyone Should Know About? </div>
                                        <div className="date">Jan 14, 2020</div>
                                    </div>
                                    <div className="item">
                                        <div className="title">Figma On Figma: How We Built Our Website Design System</div>
                                        <div className="date">Jan 14, 2020</div>
                                    </div>
                                </div>
                            </div>
                            <div className="categories">
                                <div className="name">Categories</div>
                                <div className="category">Technoligy<span>- 20 Posts</span></div>
                                <div className="category">Freelancing<span>- 07 Posts</span></div>
                                <div className="category">Writing<span>- 16 Posts</span></div>
                                <div className="category">Marketing<span>- 11 Posts</span></div>
                                <div className="category">Business<span>- 35 Posts</span></div>
                                <div className="category">Education<span>- 14 Posts</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (<p>Laddar artikel...</p>)}
        </>


    )
}

export default ProductDetails
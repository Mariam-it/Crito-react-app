import React from 'react'
import { useProducts } from '../contexts/ProductContext'
import { Link } from 'react-router-dom';

const ProductList = () => {
    const {products} = useProducts()
        // Funktion för att extrahera datumet i önskat format
        function extractFormattedDate(fullDate) {
            const dateObject = new Date(fullDate);
            const day = dateObject.getDate();
            const monthIndex = dateObject.getMonth();
            const monthNames = [
                'jan', 'feb', 'mars', 'apr', 'maj', 'juni',
                'juli', 'aug', 'sep', 'okt', 'nov', 'dec'
            ];
            const monthName = monthNames[monthIndex];
            return `${day} ${monthName}`;
        }
    return (
        <div className="boxes">
            {products.map(article => (
                <div key={article.id} className="box">
                    {/* Rendera artikelinformation här */}
                    <Link to={`/news/${article.id}`}>
                        <img src={article.imageUrl} alt={article.title} />
                        <div className="date">
                            <span>{extractFormattedDate(article.published)}</span>
                        </div>
                        <div className="category">{article.category}</div>
                        <div className="title">{article.title}</div>
                        <div className="description">{article.content}</div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default ProductList
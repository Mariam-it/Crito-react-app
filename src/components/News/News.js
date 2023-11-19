import React from 'react'
import BreadCrumb from '../BreadCrumb/Breadcrumb';
import NewsArticles from '../NewsArticles/NewsArticles';
import SignUp from '../SignUp/SignUp';

function News() {
  return (
    <div>
        <BreadCrumb/>
        <NewsArticles/>
        <SignUp/>
    </div>
  )
}

export default News
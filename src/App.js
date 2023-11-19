import React from 'react'
import { Route, Routes,  } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Service from './components/Service/Service';
import News from './components/News/News';
import ArticleNews from './components/ArticleNews/ArticleNews';
import { ProductProvider } from './components/contexts/ProductContext';

function App() {
  return (

    <div>
      <ProductProvider>
      <Header/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/news' element={<News/>}/>
       <Route path='/news/:id' element={<ArticleNews/>}/>
       <Route path='/*' element={<Service/>}/>
       <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </ProductProvider>
    </div>

  )
}

export default App
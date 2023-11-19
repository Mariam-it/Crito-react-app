import { useContext, createContext, useState, useEffect } from "react";

const ProductContext = createContext()
export const useProducts = () => useContext(ProductContext)

export const ProductProvider = ({children}) =>{
    const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles"
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        getProducts()
    },[])
    const getProducts = async ()=>{
        const result = await fetch(apiUrl)
        setProducts(await result.json())
    }
    const getProduct = async (id)=>{
        const result = await fetch(`${apiUrl}/${id}`)
        setProduct(await result.json())
    }
    const clearProduct = ()=>{
        setProduct(null)
    }
    return(
        <ProductContext.Provider value={{product, products, getProduct, getProducts, clearProduct}}>
            {children}
        </ProductContext.Provider>
    )
}
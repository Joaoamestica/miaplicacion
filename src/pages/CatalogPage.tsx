import React, { useEffect, useState } from 'react'
import { IProduct } from '../interfaces/IProduct';
import { Link } from 'react-router-dom';
import AddToCartButton from '../components/Buttons/AddToCartButton';

export default function CatalogPage() {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {

    async function getProducts(){
      try {
        const response = await fetch('https://fakestoreapi.com/products');

        if(!response.ok){
          console.log('No pudimos obtener los productos');
        }
        console.log('response limpio: ', response);
        const productsJson = await response.json();
        setProducts(productsJson);
        console.log('response json: ', productsJson);

      } catch (error) {
        console.log('Error al obtener los productos');
      }
    }

    //getProducts();


    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setProducts(json))
      .catch(err => console.log('Error al obtener los productos: ', err));

  }, []);


  return (
    <>
      <div>Catalogo de productos</div>
      <br />
      <div className='product-grid'>
        {products.map( product => (
          <div key={product.id} className='product-card'>
            <img src={product.image} alt={product.title} width="100" />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <Link to={`/catalog/product/${product.id}`}> Ver detalle</Link>
            <AddToCartButton product= {product}></AddToCartButton>
          </div>
        ))}
      </div>
    </>
  )
}

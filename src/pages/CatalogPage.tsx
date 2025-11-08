import React, { useEffect, useState } from 'react'
import { IProduct } from '../interfaces/IProduct';
import { Link } from 'react-router-dom';
import AddToCartButton from '../components/Buttons/AddToCartButton';
import axios from 'axios';

export default function CatalogPage() {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {

    


    // fetch('https://fakestoreapi.com/products')
    //   .then(res=>res.json())
    //   .then(json=>setProducts(json))
    //   .then(() => console.log('Productos obtenidos correctamente'))
    //   .then(() => console.log(products))
    //   .catch(err => console.log('Error al obtener los productos: ', err));


    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
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

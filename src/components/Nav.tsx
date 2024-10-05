import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Nav() {

  const totalQuantity = useSelector((state:any) => state.productReducers.products.length);

  return (
    <>
      <nav>
          <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li><Link to="/catalog">Catalogo</Link></li>
              <li><Link to="/about">Quienes somos</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
          </ul>
      </nav>
      <div>
        <p>productos: {totalQuantity}</p>
      </div>
    </>
  )
}

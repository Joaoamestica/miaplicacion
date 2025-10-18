import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Nav() {
  const totalQuantity = useSelector((state: any) => state.productReducers.products.length);

  return (
    <>
      <nav className="menu-bar">
        <ul>
          <li>
            <Link to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/catalog">
              Catálogo
            </Link>
          </li>
          <li>
            <Link to="/about">
              Quiénes somos
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contacto
            </Link>
          </li>
        </ul>

        <div>
          <Link to="/carrito">
            <div className='container-carrito'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ display: 'block', color: '#fff' }}
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 12.39A2 2 0 0 0 9.62 15H19a2 2 0 0 0 2-1.59l1.38-7.59H6"></path>
              </svg>

              {totalQuantity >= 0 && (
                <span className="badge-carrito">
                  {totalQuantity}
                </span>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

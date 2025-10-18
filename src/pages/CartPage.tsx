import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAllProducts } from "../redux/productSlice";


export default function CartPage() {

    const [carrito, setCarrito] = useState([])
    const dispatch = useDispatch();
    const listProduct = useSelector((state: any) => state.productReducers.products);

    useEffect(() => {
        //setCarrito(JSON.parse(localStorage.getItem('cart') || '[]'));
        setCarrito(listProduct);
    }, [listProduct])

    const handleRemoveFromCart = (id: number) => {
        dispatch(deleteProduct(id))
    }

    return (
        <div className="cart-container">
            <div className='cart-card'
                style={{
                    flex: "3",
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}>
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrito.map((item: any) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td><button>+</button> 1 <button>-</button></td>
                                <td>
                                    <button onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='resumen-card'
                style={{
                    flex: "1",
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    height: "fit-content",
                }}
            >
                <h2>Resumen de la compra</h2>
                <p>Total: ${carrito.reduce((acc: any, item: any) => acc + item.price * item.quantity, 0)}</p>
                <button>Finalizar compra</button>
            </div>
        </div>
    )
}
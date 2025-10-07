import { useEffect, useState } from "react"

export default function CartPage() {

    const [carrito, setCarrito] = useState([]) 

    useEffect(() => {
        setCarrito(JSON.parse(localStorage.getItem('cart') || '[]'));
    }, [])

    return (
        <div>
            <h1>Carrito de compras</h1>
            <ul>
                {carrito.map((item:any) => (
                    <li key={item.id}>{item.id} {item.title} - {item.price}</li>
                ))}
            </ul>
        </div>
    )
}
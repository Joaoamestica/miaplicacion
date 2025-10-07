import { useDispatch } from "react-redux";
import { IProduct } from "../../interfaces/IProduct";
import { addProduct } from "../../redux/productSlice";
import { useState } from "react";



const AddToCartButton = ({product} : {product:IProduct | null}) => {

    const dispatch = useDispatch();

    let [products, setProducts] = useState<IProduct[]>([]);

    const handleAddToCart = () => {
      dispatch(addProduct(product))
      loadCartFromLocalStorage();
  }

  function loadCartFromLocalStorage() 
  {
    // Recuperar carrito
    let carritoActual = localStorage.getItem("cart");
    let products: IProduct[] = [];

    try {
      const parsed = carritoActual ? JSON.parse(carritoActual) : [];
      products = Array.isArray(parsed) ? parsed : [];
      // Agregar producto
      if (product) {
        products.push(product);
      }
      // Guardar carrito actualizado
      localStorage.setItem("cart", JSON.stringify(products));
      //localStorage.setItem("perro", '5');
      //localStorage.removeItem("perro");
      //localStorage.clear();

      console.log("Producto añadido al carrito id:", product?.id);

    } catch (error) {
      console.error("Error al parsear localStorage:", error);
      products = [];
    }
  }

    

    return(
        <button onClick={handleAddToCart} >
            Añadir al carro
        </button>
    )
}

export default  AddToCartButton;
import { useDispatch } from "react-redux";
import { IProduct } from "../../interfaces/IProduct";
import { addProduct } from "../../redux/productSlice";



const AddToCartButton = ({product} : {product:IProduct | null}) => {

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addProduct(product))
    }

    return(
        <button onClick={handleAddToCart} >
            Añadir al carro
        </button>
    )
}

export default  AddToCartButton;
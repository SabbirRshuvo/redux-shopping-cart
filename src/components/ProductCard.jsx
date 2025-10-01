import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/features/cart";

const ProductCard = ({ product }) => {
  const { name, price, id, category, image } = product;
  const carts = useSelector((state) => state.carts);
  console.log(carts);
  const dispatch = useDispatch();
  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300">
      <figure>
        <img src={image} alt={name} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-500">{category}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-semibold text-blue-600">${price}</span>
          <button
            onClick={() => dispatch(addToCart(id))}
            className="btn btn-primary flex items-center gap-2"
          >
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

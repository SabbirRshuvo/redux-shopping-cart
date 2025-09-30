import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { name, price, category, image } = product;
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
          <button className="btn btn-primary flex items-center gap-2">
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

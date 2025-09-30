import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import AddProduct from "./AddProduct";

const Home = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-3 gap-4 ">
        <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.length > 0 ? (
              products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            ) : (
              <div>No products found</div>
            )}
          </div>
        </div>
        <div className="">
          <AddProduct />
        </div>
      </div>
    </div>
  );
};

export default Home;

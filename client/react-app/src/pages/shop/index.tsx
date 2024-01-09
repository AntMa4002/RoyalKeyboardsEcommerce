import { useContext } from "react";
import { useGetProducts } from "../../hooks/useGetProducts";
import { Product } from "./product";
import { IShopContext, ShopContext } from "../../context/shop-context";
import { Navigate } from "react-router-dom";

export const ShopPage = () => {
  const { products } = useGetProducts();
  const { isAuthenticated } = useContext<IShopContext>(ShopContext);
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }
  return (
    <div className="shop">
      <img src="./images/maxresdefault.jpg" />
      <br></br>
      <h1 id="--prod-tag: filter button state">All Products</h1>
      <div className="products scale-up-center">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};


// --prod-tag: filter button state
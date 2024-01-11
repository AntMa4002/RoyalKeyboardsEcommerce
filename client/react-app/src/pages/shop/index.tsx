import { useContext } from "react";
import { useGetProducts } from "../../hooks/useGetProducts";
import { Product } from "../../components/product";
import { IShopContext, ShopContext } from "../../context/shop-context";
import { Navigate } from "react-router-dom";
import { Filter } from "../../components/Filter";
import "./style.css";

export const ShopPage = () => {
  const { products } = useGetProducts();
  const { isAuthenticated, isFiltered, filter } =
    useContext<IShopContext>(ShopContext);
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }
  return (
    <div className="shop">
      <img className="fade-in" src="./images/maxresdefault.jpg" />
      <h1 id="title1" className="fade-in">
        Products
      </h1>
      <div id="filter-container">
        <Filter />
      </div>
      <div className="products scale-up-center">
        {!isFiltered
          ? products.map((product) => <Product product={product} />)
          : products
              .filter((product) => filter.includes(product.tag))
              .map((product) => <Product product={product} />)}
      </div>
    </div>
  );
};

// {products.filter((product) => filter.includes(product.tag)).map((product) => (<Product product={product} />))}

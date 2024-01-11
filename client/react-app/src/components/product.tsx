import { useContext } from "react";
import { IProduct } from "../models/interfaces";
import { IShopContext, ShopContext } from "../context/shop-context";

interface Props {
  product: IProduct;
}

export const Product = (props: Props) => {
  const { _id, productName, description, price, stockQuantity, imageURL } =
    props.product;
  const { addToCart, getCartItemCount } = useContext<IShopContext>(ShopContext);

  const cartItemCount = getCartItemCount(_id);

  return (
    <div className="product">
      <img className="rounded" src={imageURL} />
      <div className="description">
        <h3 className="h3">{productName}</h3>
        <p className="h6">{description}</p>
        <p className="h4">${price.toFixed(2)}</p>
      </div>

      {stockQuantity > 0 ? (
        <>
          {stockQuantity < 10 && (
            <p className="h6">Only {stockQuantity} left in stock!</p>
          )}
          <button
            className="btn btn-primary addie"
            onClick={() => addToCart(_id)}
          >
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
        </>
      ) : (
        <div className="stockQuantity">
          <h1>OUT OF STOCK</h1>
        </div>
      )}
    </div>
  );
};

import { useContext } from "react";
import { IProduct } from "../models/interfaces";
import { IShopContext, ShopContext } from "../context/shop-context";

interface Props {
  product: IProduct;
}

export const CartItem = (props: Props) => {
  const { _id, imageURL, productName, price, stockQuantity } = props.product;
  const { addToCart, removeFromCart, updateCartItemCount, getCartItemCount } =
    useContext<IShopContext>(ShopContext);

  const cartItemCount = getCartItemCount(_id);
  return (
    <div className="cart-item">
      <img className="img-thumbnail" src={imageURL} />
      <div className="description">
        <h3 className="h3">{productName}</h3>
        <p className="h4">Price: ${price.toFixed(2)}</p>
        <div className="count-handler">
          <button
            className="btn btn-secondary"
            onClick={() => removeFromCart(_id)}
          >
            -
          </button>
          <input
            type="number"
            value={cartItemCount}
            onChange={(e) => updateCartItemCount(Number(e.target.value), _id)}
            max={stockQuantity}
          />
          <button
            className="btn btn-primary"
            id="buuu"
            onClick={() => addToCart(_id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

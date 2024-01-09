import { useContext } from "react";
import { useGetProducts } from "../../hooks/useGetProducts";
import { IProduct } from "../../models/interfaces";
import { IShopContext, ShopContext } from "../../context/shop-context";
import { CartItem } from "../../components/cart-items";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const CheckoutPage = () => {
  const { getCartItemCount, getTotalCartAmount, checkout } =
    useContext<IShopContext>(ShopContext);
  const { products } = useGetProducts();
  const navigate = useNavigate();

  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      <div>
        <br></br>
        <h1>Cart</h1>
      </div>

      <div className="cart bounce-in-top">
        {products.map((product: IProduct) => {
          if (getCartItemCount(product._id) !== 0) {
            return <CartItem product={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="h3"> Subtotal: ${totalAmount.toFixed(2)}</p>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
          <button className="btn btn-primary" onClick={checkout}>
            Checkout
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty.</h1>
      )}
    </div>
  );
};

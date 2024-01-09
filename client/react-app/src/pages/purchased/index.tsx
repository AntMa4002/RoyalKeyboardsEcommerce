import { useContext } from "react";
import { IShopContext, ShopContext } from "../../context/shop-context";
import "./style.css";

export const PurchasedPage = () => {
  const { purchasedItems, addToCart, getCartItemCount } =
    useContext<IShopContext>(ShopContext);
  return (
    <div className="purchased-items-page">
      <h1>Previously Purchased Items</h1>
      <div className="purchased-items">
        {purchasedItems.map((item) => {
          const cartItemCount = getCartItemCount(item._id);
          return (
            <div className="item">
              <h3>{item.productName}</h3>
              <img className="rounded" src={item.imageURL} />
              <p> ${item.price.toFixed(2)}</p>
              {item.stockQuantity > 0 ? (
                <>
                  {item.stockQuantity < 10 && (
                    <p className="h6">
                      Only {item.stockQuantity} left in stock!
                    </p>
                  )}
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(item._id)}
                  >
                    Purchase Again{" "}
                    {cartItemCount > 0 && <> ({cartItemCount})</>}
                  </button>
                </>
              ) : (
                <div className="stockQuantity">
                  <h1>OUT OF STOCK</h1>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { IShopContext, ShopContext } from "../context/shop-context";

export const Navbar = () => {
  const {
    availableMoney,
    getTotalCartNumber,
    isAuthenticated,
    setIsAuthenticated,
  } = useContext<IShopContext>(ShopContext);
  let totalCart = getTotalCartNumber();
  const logout = () => {
    setIsAuthenticated(false);
  };
  return (
    <div className="fade-in">
      <nav className="navbar navbar-expand-lg navyy" data-bs-theme="dark">
        <div className="container-fluid">
          <h1 id="title">Royal Keyboards</h1>
          {isAuthenticated && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="navbar-brand" to="/">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="/purchased">
                  Purchased
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="/checkout">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  {totalCart > 0 && <> ({totalCart})</>}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="/auth" onClick={logout}>
                  Logout
                </Link>
              </li>
              <li className="nav-item">
                <span className="navbar-brand">
                  Available Funds: ${availableMoney.toFixed(2)}
                </span>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

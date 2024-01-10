import { useContext } from "react";
import { IShopContext, ShopContext } from "../context/shop-context";

export const Filter = () => {
  const { handleFilterChange, handleRadioChange, isFiltered, filter } =
    useContext<IShopContext>(ShopContext);
  return (
    <>
      <div className="fade-in" id="filter">
        <div className="form-check">
          <label className="form-check-label" id="rad1">
            <input
              type="radio"
              className="form-check-input"
              checked={!isFiltered}
              onChange={() => handleRadioChange(false)}
              name="options"
              required
            />
            All
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" id="rad2">
            <input
              type="radio"
              className="form-check-input ins"
              checked={isFiltered}
              onChange={() => handleRadioChange(true)}
              name="options"
            />
            Filter
          </label>
        </div>
      </div>
      {isFiltered && (
        <div id="checks">
          <label className="form-check-label ins">
            <input
              type="checkbox"
              value="Keyboard"
              className="form-check-input"
              checked={filter.includes("Keyboard")}
              onChange={() => handleFilterChange("Keyboard")}
            />
            Keyboards
          </label>
          <label className="form-check-label ins">
            <input
              type="checkbox"
              className="form-check-input"
              value="Keycaps"
              checked={filter.includes("Keycaps")}
              onChange={() => handleFilterChange("Keycaps")}
            />
            Keycaps
          </label>
          <label className="form-check-label ins">
            <input
              type="checkbox"
              className="form-check-input"
              value="Switches"
              checked={filter.includes("Switches")}
              onChange={() => handleFilterChange("Switches")}
            />
            Switches
          </label>
          <label className="form-check-label ins">
            <input
              type="checkbox"
              className="form-check-input"
              value="Accessories"
              checked={filter.includes("Accessories")}
              onChange={() => handleFilterChange("Accessories")}
            />
            Accessories
          </label>
        </div>
      )}
    </>
  );
};

import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";

const FoodItem = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);

  const handleAddToCart = () => {
    dispatch(addToCart(id));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  const itemCount = cartItems[id] || 0;

  return (
    <div className="food-item" id="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt={name} />
        {itemCount === 0 ? (
          <img
            className="add"
            onClick={handleAddToCart}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={handleRemoveFromCart}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p>{itemCount}</p>
            <img
              onClick={handleAddToCart}
              src={assets.add_icon_green}
              alt="Add"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-ratings">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

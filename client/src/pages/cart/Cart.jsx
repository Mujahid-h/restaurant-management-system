import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteFromCart } from "../../redux/cartSlice";

const Cart = () => {
  const { food } = useSelector((store) => store.food);
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p>
                    <MdDelete
                      onClick={() => dispatch(deleteFromCart(item._id))}
                    />
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;

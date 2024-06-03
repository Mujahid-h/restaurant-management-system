import React, { useEffect } from "react";
import "./FoodDisplay.css";
import { food_list } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { setFood } from "../../redux/foodSlice";
import FoodItem from "../foodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const dispatch = useDispatch();
  const { food } = useSelector((store) => store.food);

  useEffect(() => {
    dispatch(setFood(food_list));
  }, []);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you!</h2>
      <div className="food-display-items">
        {food.map((item, index) =>
          category === "All" || category === item.category ? (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;

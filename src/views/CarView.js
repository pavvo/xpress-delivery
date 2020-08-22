import React from "react";
import { database } from "../config/firebase";

const CarView = (props) => {
  const removeCar = (id) => {
    const carsRef = database.ref("Cars").child(id);
    carsRef.remove();
  };

  return (
    <div className="p-4 m-4 text-center">
      <h1 className="text-xl">{props.brand}</h1>
      <h1 className="text-lg">{props.model}</h1>

      <h1 className="text-md">{props.makeYear}</h1>
      <h1 className="text-md">{props.enginePower}</h1>
      <button onClick={() => removeCar(props.id)}>Remove</button>
    </div>
  );
};

export default CarView;
